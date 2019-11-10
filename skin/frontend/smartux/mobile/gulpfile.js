var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');
var order = require('gulp-order');

var paths = {
    sass: './src/css/**/*.scss',
};

var cssDest = './css/';

gulp.task('sass', function (done) {
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(cssmin())
        // .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(cssDest))
        .on('end', done)
});



gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch('./css/*.css');
});