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

gulp.task('build-js', function() {
    return browserify('./src/Arc.js')
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['build-js']);
