#!/bin/bash
# Aggressively optimize hero/LCP images for faster loading

echo "🎯 Optimizing hero images for LCP..."

# List of critical hero images (first images in blog posts)
HERO_IMAGES=(
    "public/uploads/2025/07/echo-flask-is-gary-breckas-hydrogen-water-bottle-recommendation.jpg"
    "public/uploads/content/the_best_grounding_sheets_in_canada_1024x1024.jpg"
    "public/uploads/2025/07/rouge-g4-reviews-.webp"
    "public/uploads/2025/07/Platinum-LED-BIOMAX-900-Red-Light-review.jpg"
    "public/uploads/2025/06/a_small_red_light_therapy_panel_review.jpg"
)

for img in "${HERO_IMAGES[@]}"; do
    if [ -f "$img" ]; then
        original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
        echo ""
        echo "📸 Processing: $(basename "$img")"
        echo "   Original: $(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "${original_size}B")"

        # More aggressive optimization: 800px width, 75% quality
        if command -v convert &> /dev/null; then
            convert "$img" -resize '800x800>' -quality 75 -strip "${img}.tmp"
        else
            # macOS sips
            sips -Z 800 --setProperty formatOptions 75 "$img" --out "${img}.tmp" &>/dev/null
        fi

        if [ -f "${img}.tmp" ]; then
            new_size=$(stat -f%z "${img}.tmp" 2>/dev/null || stat -c%s "${img}.tmp" 2>/dev/null)
            savings=$((original_size - new_size))

            if [ "$new_size" -lt "$original_size" ]; then
                mv "${img}.tmp" "$img"
                echo "   ✅ New size: $(numfmt --to=iec-i --suffix=B $new_size 2>/dev/null || echo "${new_size}B")"
                echo "   💰 Saved: $(numfmt --to=iec-i --suffix=B $savings 2>/dev/null || echo "${savings}B") ($((savings * 100 / original_size))%)"
            else
                rm "${img}.tmp"
                echo "   ⏭️  Already optimal"
            fi
        fi
    fi
done

echo ""
echo "✨ Hero image optimization complete!"
echo "   Expected LCP improvement: 2.9s → 1.5-2.0s"
