/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './vueform.config.ts',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [require('@vueform/vueform/tailwind'), require('flowbite/plugin')]
}
