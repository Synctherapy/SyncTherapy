import { describe, it, expect, mock, beforeAll } from "bun:test";

// Mock React
mock.module("react", () => {
    return {
        cache: (fn: any) => {
            // Simple cache implementation for testing
            const map = new Map();
            return async (...args: any[]) => {
                const key = JSON.stringify(args);
                if (map.has(key)) return map.get(key);
                const result = await fn(...args);
                map.set(key, result);
                return result;
            };
        },
    };
});

// Mock gray-matter
mock.module("gray-matter", () => {
    return {
        default: (content: string) => {
            if (content && content.includes("title: About")) return { data: { title: "About" }, content: "About content" };
            if (content && content.includes("title: Hello")) return { data: { title: "Hello" }, content: "Hello content" };
            return { data: {}, content: content || "" };
        }
    };
});

// Mock fs/promises
const mockFiles: Record<string, string> = {
  "pages/about.md": "---\ntitle: About\n---\nAbout content",
  "posts/hello.md": "---\ntitle: Hello\n---\nHello content",
};

mock.module("fs", () => {
    return {
        promises: {
            access: async (p: string) => {
                if (p.endsWith("pages") || p.endsWith("posts")) return Promise.resolve();
                const found = Object.keys(mockFiles).some(k => p.endsWith(k));
                if (found) return Promise.resolve();
                throw new Error("File not found");
            },
            readFile: async (p: string) => {
                const foundEntry = Object.entries(mockFiles).find(([k]) => p.endsWith(k));
                if (foundEntry) return Promise.resolve(foundEntry[1]);
                throw new Error("File not found");
            },
            readdir: async (p: string) => {
                if (p.endsWith("pages")) return ["about.md"];
                if (p.endsWith("posts")) return ["hello.md"];
                return [];
            }
        }
    };
});

describe("Content Optimization", () => {
  let getContentBySlug: any;
  let getAllPaths: any;

  beforeAll(async () => {
    const mod = await import("./content");
    getContentBySlug = mod.getContentBySlug;
    getAllPaths = mod.getAllPaths;
  });

  it("getContentBySlug returns correct data for page", async () => {
    const data = await getContentBySlug("about");
    expect(data).not.toBeNull();
    expect(data?.type).toBe("page");
    expect(data?.frontmatter.title).toBe("About");
  });

  it("getContentBySlug returns correct data for post", async () => {
    const data = await getContentBySlug("hello");
    expect(data).not.toBeNull();
    expect(data?.type).toBe("post");
    expect(data?.frontmatter.title).toBe("Hello");
  });

  it("getAllPaths returns correct paths", async () => {
    const paths = await getAllPaths();
    // Expect about and hello
    const slugs = paths.map((p: any) => p.slug[0]);
    expect(slugs).toContain("about");
    expect(slugs).toContain("hello");
  });

  it("getContentBySlug returns null for non-existent", async () => {
    const data = await getContentBySlug("non-existent");
    expect(data).toBeNull();
  });
});
