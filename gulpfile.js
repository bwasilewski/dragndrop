var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify-es').default,
    browsersync = require('browser-sync')
    webpack = require('webpack-stream');



gulp.task('scripts', function(){
    return gulp.src('./src/main.js')
        .pipe(plumber({
            errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(jshint({
            esversion: 6,
            asi: true
        }))
        .pipe(jshint.reporter('default'))
        .pipe(webpack({
            entry: './src/main.js',
            output: {
                filename: 'main.js'
            }
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify())
        .pipe(rename({basename: 'main', suffix: '.min', extname: '.js'}))
        .pipe(gulp.dest('./dist/'))
        .pipe(gulp.dest('./example/js/'))
});


gulp.task('example', function () {
    return gulp.src('./src/app.js')
        .pipe(plumber({
            errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(jshint({
            esversion: 6,
            asi: true
        }))
        .pipe(jshint.reporter('default'))
        .pipe(webpack({
            entry: './src/app.js',
            output: {
                filename: 'app.js'
            }
        }))
        .pipe(gulp.dest('./example/js/'))
        .pipe(uglify())
        .pipe(rename({basename: 'app', suffix: '.min', extname: '.js'}))
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