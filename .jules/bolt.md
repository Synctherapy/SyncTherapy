
## 2025-02-28 - High-Frequency DOM Updates
**Learning:** For continuous user interactions like scrolling, relying on React state (`useState`) to track and update the DOM (e.g., progress bars) triggers unnecessary re-renders across components at every pixel change, negatively impacting scrolling performance and frame rate.
**Action:** Use a `useRef` to target the DOM element directly and mutate its styles and attributes outside the React render cycle, bypassing unnecessary re-renders completely while keeping the visual state in sync.
