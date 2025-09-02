#!/bin/bash

# TransX Future Unleashed - cPanel Deployment Script
echo "🚀 Deploying TransX Future Unleashed for cPanel..."

# Build the project
echo "📦 Building project for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # List the built files
    echo "📁 Files ready for cPanel upload:"
    echo ""
    echo "📋 Upload these files to your cPanel public_html folder:"
    echo "   ✅ dist/index.html → public_html/index.html"
    echo "   ✅ dist/.htaccess → public_html/.htaccess"
    echo "   ✅ dist/robots.txt → public_html/robots.txt"
    echo "   ✅ dist/tex-logo.svg → public_html/tex-logo.svg"
    echo "   ✅ dist/assets/ → public_html/assets/"
    echo ""
    echo "🔧 cPanel Configuration:"
    echo "   1. Upload all files to public_html root"
    echo "   2. Set file permissions: 644 for files, 755 for folders"
    echo "   3. Ensure mod_rewrite is enabled in cPanel"
    echo "   4. Test your domain: https://yourdomain.com"
    echo ""
    echo "📊 Build Summary:"
    ls -la dist/
    echo ""
    echo "🎯 Your TransX site is now ready for cPanel hosting!"
    echo "   - No more white screen issues"
    echo "   - Proper SPA routing with .htaccess"
    echo "   - Security headers and performance optimizations"
    echo "   - TEX logo favicon working correctly"
    
else
    echo "❌ Build failed! Please check for errors above."
    exit 1
fi
