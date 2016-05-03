'use strict';

var path = require('path');
var gulp = require('gulp');
var data = require('gulp-data');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

// Sass
gulp.task('sass', function() {
  return gulp.src('./src/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
// JS
gulp.task('js', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js'));
});

// Handlebars
var handlebarContextPath = path.resolve('src/templates/context.js');
gulp.task('handlebars', function() {
  var tempData = {};
  return gulp.src('./src/templates/views/**/*.hbs')
    .pipe(data(function fn(file) {
      var root = path.resolve(__dirname, '../src/templates/views/');
      return { path: path.parse(path.relative(root, file.path)) };
    }))
    .pipe(handlebars(require(handlebarContextPath), { batch: './src/templates/partials' }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['sass', 'js', 'handlebars', 'watch']);


// Watches
var handlebarPaths = './src/templates/views/**/*.hbs'
  .concat('src/templates/partials/**/*.hbs',
    'src/templates/context.js');
gulp.task('watch', function() {
  var tasks = ['sass', 'js', 'handlebars'];
  gulp.watch('./src/styles/**/*.scss', tasks);
  gulp.watch('./src/js/**/*.js', tasks);
  gulp.watch(handlebarPaths, tasks);
});
