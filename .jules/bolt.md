
## 2025-03-04 - React Cache Deduplication
**Learning:** `React.cache()` strictly requires primitive arguments (like `string` or `number`) for optimal memoization because it uses referential equality underneath (Object.is) for comparison. Passing `slug: string[]` instead of `slug.join('/')` causes `cache()` to fail to deduplicate identical server-side data fetching requests within the same render tree.
**Action:** Always refactor data fetching utility functions wrapping `React.cache()` to accept serialized/primitive strings instead of arrays or objects to ensure proper Next.js request-scope deduplication.
