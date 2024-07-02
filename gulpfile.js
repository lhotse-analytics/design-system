const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

// Pfade
const paths = {
  scss: {
    src: './docs/src/scss/**/*.scss',
    dest: './docs/dist/css'
  }
};

// Sass kompilieren und minifizieren
function compileSass() {
  return gulp.src(paths.scss.src)
    .pipe(sourcemaps.init()) // Initialisiere Sourcemaps
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS()) // CSS minifizieren
    .pipe(sourcemaps.write('.')) // Schreibe Sourcemaps
    .pipe(gulp.dest(paths.scss.dest));
}

// Beobachte Änderungen an den SCSS-Dateien
function watchFiles() {
  gulp.watch(paths.scss.src, compileSass);
}

// Aufgaben definieren
const build = gulp.series(compileSass, watchFiles);

// Aufgaben exportieren
exports.compileSass = compileSass;
exports.watchFiles = watchFiles;
exports.default = build;