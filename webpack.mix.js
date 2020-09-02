const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const tailwindcss = require('tailwindcss')

mix.copy('src/assets/fonts/*', 'web/fonts')
   .js('src/js/prism', 'web/js')
   .sass('src/sass/app.scss', 'web/css')
   .options({
		processCssUrls: false,
		postCss: [ tailwindcss('./tailwind.config.js') ],
  	})
