var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    path = require('path'),
    bower = require('gulp-bower'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create();


// Static server
gulp.task('browser-sync', ['less'], function() {
    browserSync.init({
        server: {
            baseDir: "builds/development"
        }
    });
    gulp.watch("src/less/*.less", ['less']);
    gulp.watch("src/templates/*.jade", ['jade']);
});

// jade templates
gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(plumber())
        .pipe(jade({
            pretty: true
            }))
        .pipe(gulp.dest('builds/development'))
        .pipe(browserSync.stream());
});


// css less
gulp.task('less', function () {
    return gulp.src('src/less/**/*.less')
        .pipe(plumber())
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
            })
        )
        .pipe(gulp.dest('builds/development/css'))
        .pipe(browserSync.stream());
});

// create bower lib
gulp.task('bower', function() {
    return bower()
    .pipe(gulp.dest('builds/development/lib/'));
});
