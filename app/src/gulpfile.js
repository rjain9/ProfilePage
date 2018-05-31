'use strict';

//dependencies
import gulp from "gulp";
import sass from "gulp-sass";
import minifyCSS from "gulp-clean-css";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import changed from "gulp-changed";

/////////////
// - SCSS/CSS
/////////////

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';

// Compile SCSS
gulp.task('compile_scss', function(){

    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS)
    .pipe(rename({suffix : '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));

});

// Detect changes in SCSS
gulp.task('watch_scss', function(){

    gulp.watch(SCSS_SRC, ['compile_scss']);

});

// Run tasks
gulp.task('default', ['watch_scss']);