var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglifyjs');
var livereload = require('gulp-livereload');

gulp.task('sass', function() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('uglify', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify('main.min.js'))
        .pipe(gulp.dest('./js'))
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./src/js/**/*.js', gulp.series('uglify'));
    gulp.watch(['./css/styles.css', './js/main.min.js'], function (files){
        livereload.changed(files);
    });
});