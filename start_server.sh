#!/bin/bash
# Quick start script for HoloWorld project page

echo "🚀 Starting HoloWorld Project Page Server..."
echo ""
echo "📂 Project location: /home/liuzj/code/HoloWorld"
echo ""

cd /home/liuzj/code/HoloWorld

# Check if Python is available
if command -v python3 &> /dev/null; then
    PORT=8000
    echo "✅ Starting local server on port $PORT"
    echo "🌐 Open your browser and visit: http://localhost:$PORT"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server $PORT
else
    echo "❌ Python3 not found. Please install Python or open index.html directly in your browser."
    echo "📄 File location: /home/liuzj/code/HoloWorld/index.html"
fi
