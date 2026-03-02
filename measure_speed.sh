#!/bin/bash
echo "Starting dev server..."
npm run dev > dev.log 2>&1 &
SERVER_PID=$!

echo "Waiting for server to start..."
sleep 10

echo "Running verification..."
mkdir -p /home/jules/verification
cat << 'PYEOF' > /home/jules/verification/verify_sticky_cta.py
import time
from playwright.sync_api import sync_playwright

def test_sticky_cta():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use mobile viewport to see the StickyMobileCTA
        context = browser.new_context(viewport={'width': 375, 'height': 812})
        page = context.new_page()

        try:
            print("Navigating to homepage...")
            page.goto("http://localhost:3000")
            page.wait_for_load_state("networkidle", timeout=15000)

            print("Taking initial screenshot (at top of page)...")
            page.screenshot(path="/home/jules/verification/initial_mobile.png")

            print("Scrolling down to trigger CTA...")
            # Scroll past 500px threshold
            page.evaluate("window.scrollTo(0, 800)")
            time.sleep(2) # Give React time to update state

            print("Taking screenshot after scroll...")
            page.screenshot(path="/home/jules/verification/scrolled_mobile.png")

            # Verify the button is visible
            cta_button = page.locator("text=Book Appointment").last
            if cta_button.is_visible():
                print("SUCCESS: CTA Button is visible after scroll")
            else:
                print("WARNING: CTA Button not found or not visible")

            print("Scrolling to footer to test IntersectionObserver...")
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            time.sleep(2)

            print("Taking screenshot at footer...")
            page.screenshot(path="/home/jules/verification/footer_mobile.png")

            if not cta_button.is_visible():
                print("SUCCESS: CTA Button correctly hidden at footer")
            else:
                print("WARNING: CTA Button is still visible at footer")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    test_sticky_cta()
PYEOF

python3 /home/jules/verification/verify_sticky_cta.py

echo "Killing server..."
kill $SERVER_PID
