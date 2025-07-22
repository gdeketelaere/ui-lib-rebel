#!/bin/bash

# Deployment script for Render
# This script builds both applications and prepares the deployment

echo "🚀 Starting Rebel UI Components deployment..."

# Check that we are in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you are in the project root directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate tokens
echo "🎨 Generating tokens..."
npm run codegen

# Build the main application
echo "🔨 Building main application..."
npm run build:app

# Check if the build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: The dist folder was not created. The build failed."
    exit 1
fi

echo "✅ Main application built successfully in ./dist"

# Build Storybook
echo "📚 Building Storybook..."
npm run build-storybook

# Check if the build was successful
if [ ! -d "storybook-static" ]; then
    echo "❌ Error: The storybook-static folder was not created. The build failed."
    exit 1
fi

echo "✅ Storybook built successfully in ./storybook-static"

# Display deployment information
echo ""
echo "🎉 Deployment completed successfully!"
echo ""
echo "📁 Generated files:"
echo "   - Main application: ./dist"
echo "   - Storybook: ./storybook-static"
echo ""
echo "🌐 Deployment URLs (after push to Render):"
echo "   - Main application: https://rebel-ui-lib.onrender.com"
echo "   - Storybook: https://rebel-ui-lib-storybook.onrender.com"
echo ""
echo "💡 To deploy on Render:"
echo "   1. Push these changes to your GitHub repository"
echo "   2. Connect your repo to Render.com"
echo "   3. Render will automatically detect the render.yaml file"
echo "   4. Both services will be deployed automatically" 