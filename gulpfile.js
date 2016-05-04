'use strict';

var path = require('path');
var gulp = require('gulp');
var data = require('gulp-data');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var del = require('del');
var eslint = require('gulp-eslint');
var gulpSequence = require('gulp-sequence');

/*
* Build Sass, JS, Handlebars
*/
gulp.task('build', ['sass', 'js', 'handlebars']);
gulp.task('sass', function() {
  return gulp.src('./src/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});
gulp.task('js', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build'));
});
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
    .pipe(gulp.dest('./build'));
});

/*
* Minify Sass, JS, Handlebars
*/
gulp.task('minify', ['css-minify', 'js-minify', 'hbs-minify']);
gulp.task('css-minify', function() {
  return gulp.src('./build/style.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ basename: 'style' }))
    .pipe(gulp.dest('./build/min'));
});
gulp.task('js-minify', function() {
  return gulp.src('./build/app.js')
    .pipe(uglify())
    .pipe(rename({ basename: 'app' }))
    .pipe(gulp.dest('./build/min'));
});
gulp.task('hbs-minify', function() {
  return gulp.src('./build/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build/min'));
});


/*
* Watches
*/
var handlebarPaths = './src/templates/**/*.hbs'
gulp.task('watch', function() {
  var tasks = ['sass', 'js', 'handlebars'];
  gulp.watch('./src/styles/**/*.scss', tasks);
  gulp.watch('./src/js/**/*.js', tasks);
  gulp.watch(handlebarPaths, tasks);
});

/*
* Lint
*/
gulp.task('lint', function() {
  return gulp.src(['./src/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

/*
* Clean Dist and Build
*/
gulp.task('clean', function() {
  return del(['./dist/css/*', './dist/js*', './dist/*.html', './dist',
    './build/*', './build'
  ]);
});

/*
* Move files build to dist
*/
gulp.task('dist', function() {
  return gulp.src(['./build/min/app.js', './build/min/style.css', './build/min/index.html'])
    .pipe(gulp.dest('./dist'));
});

/*
* Serve, load files in dist directory
*/
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8888,
  });
});

/*
* Hi :)
*/
gulp.task('sayHi', function() {
  setTimeout(function() { console.log("I want to talk about this :)") }, 3000);
})

gulp.task('default', gulpSequence('clean', 'build', 'minify', 'dist', 'connect', 'watch', 'sayHi'));
