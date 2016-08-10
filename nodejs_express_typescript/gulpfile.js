/**
 * Created by joseph on 8/4/16.
 */
var gulp        = require('gulp');
var ts          = require('gulp-typescript');
var watch       = require('gulp-watch');
var del         = require('del');
var path        = require('path');
var fs          = require('fs');
var ngAnnotate  = require('gulp-ng-annotate');

var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');

var inject      = require('gulp-inject');



gulp.task('hello-gulp', function(done) {
    console.log("hello gulp");
});

var tsProject = ts.createProject("tsconfig.json");

gulp.task('default', function(done) {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(ts(tsProject));
    tsResult.dts.pipe(gulp.dest('app/backend_api/'));
});