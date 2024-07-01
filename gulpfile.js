const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const atImport = require('postcss-import');
const concat = require('gulp-concat');

const paths = {
    styles: {
      src: './docs/src/**/*.css',
      dest: 'dist/css',
      misc: './docs/product/atoms/**/*.css'
    }
};

function styles() {
return gulp.src(paths.styles.src)
    .pipe(postcss([atImport()]))              // Resolve @import statements
    .pipe(concat('main.min.css'))             // Alle CSS-Dateien zusammenführen
    .pipe(cleanCSS())                         // Minimieren der CSS-Dateien
    .pipe(gulp.dest(paths.styles.dest));      // Ausgabe in das Zielverzeichnis
}

function watch() {
    gulp.watch(paths.styles.src, styles);
  }
  
exports.styles = styles;
exports.watch = watch;
exports.default = gulp.series(styles, watch);