const tailwind = require('tailwindcss');

const IS_DEV = process.env.NODE_ENV === 'development';

const plugins = [tailwind];

module.exports = {
  plugins,
};
