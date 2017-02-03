var browserSync = require('browser-sync'),
    changed = require('gulp-changed'),
    config = {},
    gulp = require('gulp'),
    mjml = require('gulp-mjml');

config.server = require('./../../config/server');
config.path = require('./../../config/path');

gulp.task('mailing', function () {
    var result = gulp.src(config.path.mjml.src)
        .pipe(mjml())
        .pipe(gulp.dest(config.path.mjml.dist));

    gulp.watch(config.path.mjml.src, [config.path.mjml.task]);
});
