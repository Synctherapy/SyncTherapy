#!/bin/bash
# Image Optimization Script
# Compresses images to improve LCP and page load speed

echo "🖼️  Starting image optimization..."

# Check if we have the necessary tools
if ! command -v convert &> /dev/null && ! command -v sips &> /dev/null; then
    echo "❌ Neither ImageMagick (convert) nor sips found."
    echo "   On macOS, sips is built-in. For better results, install ImageMagick:"
    echo "   brew install imagemagick"
    exit 1
fi

IMAGES_DIR="public/uploads"
BACKUP_DIR="public/uploads-backup"
OPTIMIZED_COUNT=0

# Create backup if it doesn't exist
if [ ! -d "$BACKUP_DIR" ]; then
    echo "📦 Creating backup of original images..."
    cp -r "$IMAGES_DIR" "$BACKUP_DIR"
    echo "   ✅ Backup created at $BACKUP_DIR"
fi

# Function to optimize a single image
optimize_image() {
    local file="$1"
    local original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)

    # Skip if already optimized (< 100KB)
    if [ "$original_size" -lt 102400 ]; then
        echo "   ⏭️  Skipping $file (already < 100KB)"
        return
    fi

    echo "   🔧 Optimizing: $(basename "$file") ($(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "${original_size}B"))"

    # Use ImageMagick if available, otherwise use macOS sips
    if command -v convert &> /dev/null; then
        # ImageMagick: resize to max 1200px width, 85% quality
        convert "$file" -resize '1200x1200>' -quality 85 -strip "${file}.tmp"
    else
        # macOS sips: resize and reduce quality
        sips -Z 1200 --setProperty formatOptions 85 "$file" --out "${file}.tmp" &>/dev/null
    fi

    # Check if optimization was successful
    if [ -f "${file}.tmp" ]; then
        local new_size=$(stat -f%z "${file}.tmp" 2>/dev/null || stat -c%s "${file}.tmp" 2>/dev/null)
        local savings=$((original_size - new_size))
        local percent=$((savings * 100 / original_size))

        if [ "$new_size" -lt "$original_size" ]; then
            mv "${file}.tmp" "$file"
            echo "      ✅ Saved $(numfmt --to=iec-i --suffix=B $savings 2>/dev/null || echo "${savings}B") ($percent% reduction)"
            OPTIMIZED_COUNT=$((OPTIMIZED_COUNT + 1))
        else
            rm "${file}.tmp"
            echo "      ⏭️  Kept original (new file wasn't smaller)"
        fi
    fi
}

# Find and optimize all JPG/PNG/WebP images
echo ""
echo "🔍 Scanning for large images..."
find "$IMAGES_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read -r file; do
    optimize_image "$file"
done

echo ""
echo "✨ Optimization complete!"
echo "   📊 Optimized $OPTIMIZED_COUNT images"
echo "   💡 Original images backed up to: $BACKUP_DIR"
