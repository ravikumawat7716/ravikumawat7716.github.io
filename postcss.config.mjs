/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // <--- This is the standard plugin name
    autoprefixer: {},
  },
};

export default config;