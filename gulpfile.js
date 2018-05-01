var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify-es').default,
    browsersync = require('browser-sync')
    webpack = require('webpack-stream');



gulp.task('scripts', function(){
  return gulp.src('src/main.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(jshint({
        esversion: 6
    }))
    .pipe(jshint.reporter('default'))
    .pipe(webpack({
        entry: './src/main.js',
        output: {
            filename: 'main.js'
        }
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(uglify())
    .pipe(rename({basename: 'main', suffix: '.min', extname: '.js'}))
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
    gulp.watch("src/**/*.js", ['scripts'], ['example']);
    gulp.watch("./example/**/*", function () {
        browsersync.reload();
    })
});