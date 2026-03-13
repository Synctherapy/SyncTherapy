## 2024-03-20 - [Performance] Optimize dynamic array creation during render

**Learning:** This codebase frequently uses dynamic array creation mechanisms like `[...Array(n)]` or `new Array(n).fill(x)` directly inside component render cycles, particularly for rendering stars or duplicated layout items. This forces unnecessary array allocations and garbage collection overhead during every re-render.
**Action:** Replace `[...Array(n)]` with a statically defined array constant outside the component (e.g. `const STARS = [0, 1, 2, 3, 4]`) and slice it (`STARS.slice(0, n)`) when variable lengths are needed, preventing redundant object allocations during renders.
