const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

// Pfade
const paths = {
  scss: {
    src1: './docs/src/scss/**/*.scss',
    src2: './docs/product/atoms/**/*.scss',
    dest: './docs/dist/css'
  }
};

// Sass kompilieren und minifizieren
function compileSass() {
  return gulp.src(paths.scss.src1)
    .pipe(sourcemaps.init()) // Initialisiere Sourcemaps
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS()) // CSS minifizieren
    .pipe(sourcemaps.write('.')) // Schreibe Sourcemaps
    .pipe(gulp.dest(paths.scss.dest));
}

function compileSassSrc1() {
  return compileSass(paths.scss.src1, paths.scss.dest);
}

// Aufgabe für src2, die src1 kompiliert
function watchSrc2() {
  gulp.watch(paths.scss.src2, compileSassSrc1);
}

// Beobachte Änderungen an src1 und src2
function watchFiles() {
  gulp.watch(paths.scss.src1, compileSassSrc1);
  watchSrc2();
}

// Aufgaben definieren
const build = gulp.series(gulp.parallel(compileSassSrc1),
    watchFiles);

// Aufgaben exportieren
exports.compileSassSrc1 = compileSassSrc1;
exports.watchFiles = watchFiles;
exports.default = build;