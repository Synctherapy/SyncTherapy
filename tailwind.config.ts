import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            animation: {
                "marquee-vertical": "marquee-vertical 20s linear infinite",
                "marquee-vertical-reverse": "marquee-vertical-reverse 20s linear infinite",
                "shine": "shine var(--duration) infinite linear",
                "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            keyframes: {
                "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-50% - 10px))" },
                },
                "marquee-vertical-reverse": {
                    from: { transform: "translateY(calc(-50% - 10px))" },
                    to: { transform: "translateY(0)" },
                },
                "shine": {
                    "0%": {
                        "background-position": "0% 0%",
                    },
                    "50%": {
                        "background-position": "100% 100%",
                    },
                    "to": {
                        "background-position": "0% 0%",
                    }
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: ".5" },
                }
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
