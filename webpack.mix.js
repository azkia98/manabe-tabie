const mix = require("laravel-mix");

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

// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');

mix.js("resources/js/panel/panel.js", "public/js/panel");
mix.scripts(
    [
        "resources/js/panel/combines/index.js",
        "./node_modules/sweetalert/dist/sweetalert.min.js",
        "./node_modules/persian-date/dist/persian-date.js",
        "./node_modules/persian-datepicker/dist/js/persian-datepicker.js"
    ],
    "public/js/panel/all.js"
);

mix.sass("resources/sass/panel/panel.scss", "public/css/panel.css");
mix.sass("resources/sass/panel/show-cards.scss", "public/css");

mix.styles(
    ["resources/sass/bootstrap-rtl.css"],
    "public/css/bootstrap-rtl.css"
);

mix.disableNotifications();


mix.browserSync({
    proxy: 'manabe-tabie.test',
    notify: false,
    browser: "chromium-browser",
    reloadDebounce: 500,
    reloadDelay: 500
});