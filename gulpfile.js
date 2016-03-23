/* Add manually these lines to bundle.js once built:
var React = require('react');
var PropTypes = React.PropTypes;
var Component = React.Component;

and remove the first and last line
*/

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('bundle-libs', bundle_libs);
function bundle_libs () {
  return browserify()
    .require('react', {expose: 'react'})
    .bundle()
    .pipe(source('libs.js'))
    .pipe(gulp.dest('./dist'));
}

gulp.task('bundle-app', bundle_app);
function bundle_app () {
  return browserify('./src/Arc.js', {
    standalone: "react_svg",
  })
    .transform(babelify)
    .external('react')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
}

gulp.task('build', ['bundle-libs', 'bundle-app']);
