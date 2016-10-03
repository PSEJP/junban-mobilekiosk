var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    bs = require('browser-sync').create();
var vulcanize = require('gulp-vulcanize');

gulp.task('default', function () {
    return gulp.src('junban-mobilekiosk/junban-mobilekiosk.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripComments: true,
            stripExcludes: false,
            inlineScripts: true,
            inlineCss: true
        }))
        .pipe(gulp.dest('build'));
});

// Static server
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        },
        open: false, // Don't open browser on reload
        notify: true // Show notifications in the browser.
    });
    bs.watch("./**/*.html").on("change", bs.reload);
});
