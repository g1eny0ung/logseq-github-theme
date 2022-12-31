const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const entry = './sass/**/*.sass'

function build() {
  return gulp
    .src(entry)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
}

exports.build = build
exports.watch = function () {
  gulp.watch(entry, build)
}
