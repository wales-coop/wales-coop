var gulp = require('gulp'); // needed
var sass = require('gulp-sass'); // needed for build task
var concat = require('gulp-concat'); // needed for build task
var connect = require('gulp-connect'); // needed for server task
var insert = require('gulp-insert'); // needed for build task
var replace = require('gulp-replace'); // needed for build task
var streamify = require('gulp-streamify'); // needed for build task
var uglify = require('gulp-uglify'); // needed for build task
var browserify = require('browserify'); // needed for build task
var source = require('vinyl-source-stream'); // needed for build task
var merge = require('merge-stream'); // needed for build task
var collapse = require('bundle-collapser/plugin'); // needed for build task
var packageJSON = require('./package.json');

var srcDir = './src/';
var outDirJS = './public/js/';
var outDirCSS = './public/css/';

var header = "/*!\n" +
  " * Chart.js\n" +
  " * http://chartjs.org/\n" +
  " * Version: 2.3.0\n" +
  " *\n" +
  " * Copyright 2016 Nick Downie\n" +
  " * Released under the MIT license\n" +
  " * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md\n" +
  " */\n";

gulp.task('build', buildTask);
gulp.task('watch', watchTask);
gulp.task('server', serverTask);
gulp.task('dev', ['server', 'default']);
gulp.task('default', ['build', 'watch']);

function buildTask() {

  gulp.src(srcDir + 'sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(outDirCSS));

  var nonBundled = browserify('./src/chart.js', { standalone: 'Chart' })
    .plugin(collapse)
    .bundle()
    .pipe(source('Chart.js'))
    .pipe(streamify(uglify()))
    .pipe(insert.prepend(header))
    .pipe(streamify(concat('Chart.min.js')))
    .pipe(gulp.dest(outDirJS));

  return merge(nonBundled);

}

function watchTask() {
  return gulp.watch('./src/**', ['build']);
}

function serverTask() {
  connect.server({
    port: 8000
  });
}
