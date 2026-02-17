## 2026-02-11 - [React Performance Anti-Pattern: Array Allocation in Render]
**Learning:** The codebase frequently uses `[...Array(n)]` or literal arrays `[1, 2, 3, 4, 5]` inside render functions for star ratings. This causes unnecessary array allocation and garbage collection on every render.
**Action:** Always extract static arrays (e.g., `const STARS = [0, 1, 2, 3, 4]`) outside the component. Use `.slice(0, count)` for dynamic lengths.
