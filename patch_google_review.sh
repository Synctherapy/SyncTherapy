sed -i 's/const reviews = \[/\/\/ Static array for rendering stars to prevent garbage collection overhead during re-renders\nconst STARS = \[0, 1, 2, 3, 4\];\n\nconst reviews = \[/' components/GoogleReviewWidget.tsx
sed -i 's/\[...Array(5)\].map/STARS.map/g' components/GoogleReviewWidget.tsx
sed -i 's/\[...Array(review.stars)\].map/STARS.slice(0, review.stars).map/g' components/GoogleReviewWidget.tsx
