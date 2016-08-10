/**
 * Created by joseph on 8/4/16.
 */
var gulp        = require('gulp');
//var ts          = require('gulp-typescript');
var gulpTsc     = require('gulp-tsc');
var gulpTypings = require("gulp-typings");
var watch       = require('gulp-watch');
var del         = require('del');
var path        = require('path');
var fs          = require('fs');
var ngAnnotate  = require('gulp-ng-annotate');

var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var merge       = require('merge-stream');
var inject      = require('gulp-inject');

var TYPESCRIPT_FILES = ["",""]

gulp.task('hello-gulp', function(done) {
    console.log("hello gulp");
});

var tsProject = ts.createProject("tsconfig.json");

gulp.task('default',["installTypeings"], function(done) {


    var tsResult = gulp.src('src/**/*.ts')
        .pipe(ts(tsProject));
    tsResult.dts.pipe(gulp.dest('app/backend_api/'));
});

gulp.task("installTypings",function(){
    var stream = gulp.src("./typings.json")    //will install all typingsfiles in pipeline.
        .pipe(gulpTypings());
});

gulp.task("build-ts", function() {
    var code = gulp.src('src/**/*.ts')
        .pipe(gulpTsc());

});

//gulp.task("build", ["installTypings", "default"]);