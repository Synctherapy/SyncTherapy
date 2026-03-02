## 2025-03-02 - Removed useWindowScroll in StickyMobileCTA
**Learning:** React-use `useWindowScroll` triggers a re-render on EVERY scroll event pixel, leading to main thread blocking. Combined with `getBoundingClientRect()` inside useEffect, this creates synchronized layout thrashing.
**Action:** When scroll position only matters for a threshold (e.g., > 500px), use a custom scroll listener with a state update that bails out early, and use `IntersectionObserver` instead of layout metrics for element visibility.
