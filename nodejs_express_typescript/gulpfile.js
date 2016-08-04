/**
 * Created by joseph on 8/4/16.
 */
var gulp        = require('gulp');
var typescript  = require('gulp-typescript');
var watch       = require('gulp-watch');
var del         = require('del');
var path        = require('path');
var fs          = require('fs');
var ngAnnotate  = require('gulp-ng-annotate');

var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');

var inject             = require('gulp-inject');



gulp.task('hello-gulp', function(done) {
    console.log("hello gulp");
});