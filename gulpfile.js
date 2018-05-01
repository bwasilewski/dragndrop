var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    browsersync = require('browser-sync');



gulp.task('scripts', function(){
  return gulp.src('src/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(gulp.dest('dist/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
});


gulp.task('example', function () {
    return gulp.src('./dist/*.js')
        .pipe(gulp.dest('./example/js/'))
});


gulp.task('browsersync', function () {
    browsersync({
        server: {
            baseDir: './example/'
        }
    })
})


gulp.task('default', function(){
    gulp.start('browsersync');
    gulp.watch("src/**/*.js", ['scripts', 'example']);
    gulp.watch("./example/**/*", function () {
        browsersync.reload();
    })
});