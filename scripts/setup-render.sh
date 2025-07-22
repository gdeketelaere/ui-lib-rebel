#!/bin/bash

# Render setup script
# This script helps you set up the two services on Render

echo "🚀 Render Setup for Rebel UI Components"
echo ""

echo "📋 Prerequisites:"
echo "   - GitHub repository with your code"
echo "   - Render.com account"
echo ""

echo "🔧 Step 1: Deploy Main Application"
echo "   1. Go to https://render.com"
echo "   2. Click 'New +' → 'Blueprint'"
echo "   3. Connect your GitHub repository"
echo "   4. Render will use render.yaml automatically"
echo "   5. Wait for deployment to complete"
echo ""

echo "📚 Step 2: Deploy Storybook"
echo "   1. Go to https://render.com"
echo "   2. Click 'New +' → 'Static Site'"
echo "   3. Connect the same GitHub repository"
echo "   4. Configure manually:"
echo "      - Build Command: npm install && npm run build-storybook"
echo "      - Publish Directory: storybook-static"
echo "   5. Wait for deployment to complete"
echo ""

echo "🌐 Expected URLs:"
echo "   - Main app: https://rebel-ui-lib.onrender.com"
echo "   - Storybook: https://rebel-ui-lib-storybook.onrender.com"
echo ""

echo "✅ After deployment:"
echo "   - Each push to main branch will auto-deploy"
echo "   - Check logs in Render dashboard for issues"
echo ""

echo "💡 Tips:"
echo "   - Test locally first: npm run deploy"
echo "   - Check build logs if deployment fails"
echo "   - URLs may vary based on your repository name" 