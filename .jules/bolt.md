# Bolt's Journal

## 2026-02-27 - Server-Side Data Fetching in Client Components
**Learning:** Components marked with `"use client"` can still receive data fetched on the server via props. This avoids client-side fetching waterfalls and layout shifts. The pattern is: Fetch in Server Component (Page) -> Pass as prop -> Initialize state in Client Component.
**Action:** Always check if client-side data fetching can be moved to the parent Server Component to improve LCP and CLS.

## 2026-02-27 - Verification in Restricted Environment
**Learning:** The environment lacks `node_modules` and internet access, preventing `npm install`, `lint`, and `playwright`. Verification must rely on manual code review and `bun test` (which only works if dependencies are mocked).
**Action:** Focus on code correctness by reading files and double-checking logic. Avoid changes that require complex runtime verification if possible.
