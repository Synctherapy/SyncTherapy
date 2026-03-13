sed -i 's/export function TestimonialsSection() {/\/\/ Static array for rendering stars to prevent garbage collection overhead during re-renders\nconst STARS = \[0, 1, 2, 3, 4\];\n\nexport function TestimonialsSection() {/' components/sections_old/testimonials-section.tsx
sed -i 's/\[...Array(5)\].map/STARS.map/g' components/sections_old/testimonials-section.tsx
