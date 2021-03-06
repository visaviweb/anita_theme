let mix = require('laravel-mix');
mix.postCss('assets/src/css/main.css', 'assets/dist/', [
  require('tailwindcss'),
])
.sourceMaps()
.browserSync({
    proxy: "localhost/anita",
    files: [
        "./assets/src/js/**/*.js",
        "./assets/src/css/**/*.css",
        "./assets/src/img/**/*.+(png|jpg|svg)",
        "./**/*.+(html|php)",
        "./templates/**/*.+(html|twig)"
    ]
});