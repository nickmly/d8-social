var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglifyjs');
var livereload = require('gulp-livereload');

gulp.task('sass', function() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('uglify', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify('main.min.js'))
})

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});