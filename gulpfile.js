var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    bs = require('browser-sync').create();


// Static server
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        },
        open: false, // Don't open browser on reload
        notify: true // Show notifications in the browser.
    });
    bs.watch("./src/**/*.html").on("change", bs.reload);
});


// css less
gulp.task('less', function () {
    return gulp.src('src/less/**/*.less')
        .pipe(plumber())
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
            })
        )
        .pipe(gulp.dest('src/css'))
        .pipe(bs.stream());
});
