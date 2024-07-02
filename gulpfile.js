const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const atImport = require('postcss-import');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

const paths = {
    styles: {
      src: './docs/src/**/*.scss',
      dest: 'dist/css',
    }
};

function styles() {
return gulp.src(paths.styles.src)
    .pipe(postcss([atImport()]))              // Resolve @import statements
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.min.css'))             // Alle CSS-Dateien zusammenführen
    .pipe(cleanCSS())                         // Minimieren der CSS-Dateien
    .pipe(gulp.dest(paths.styles.dest));      // Ausgabe in das Zielverzeichnis
}

function watch() {
    gulp.watch(paths.styles.src, styles);
  }

const build = gulp.series(styles, watch);
  
exports.styles = styles;
exports.watch = watch;
exports.default = build;