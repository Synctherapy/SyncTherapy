#!/bin/bash
echo "URL,TTFB(s),TotalTime(s),Size(bytes),Speed(B/s)"
urls=(
  "http://localhost:3000/services/pain-management/"
  "http://localhost:3000/services/sports-injury-rehab/"
  "http://localhost:3000/services/physical-rehabilitation/"
  "http://localhost:3000/services/nutrition-consulting/"
  "http://localhost:3000/services/health-consulting/"
  "http://localhost:3000/images/generated/chronic-pain-management-colwood-clinic.jpg"
)

for url in "${urls[@]}"; do
  curl -o /dev/null -s -w "%{url_effective},%{time_starttransfer},%{time_total},%{size_download},%{speed_download}\n" "$url"
done
