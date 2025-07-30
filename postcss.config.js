// postcss.config.js
export default {
  plugins: {
    'postcss-import': {}, // This plugin is needed to process @import statements in CSS
    tailwindcss: {},      // This plugin integrates Tailwind CSS
    autoprefixer: {},     // This plugin adds vendor prefixes for broader browser compatibility
  },
};