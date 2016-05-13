var $path = require('./config').path,
    gulp = require('gulp'),
    uglify = require('gulp-uglify')
;

module.exports = {
    dev: () => {
        return gulp.src($path.dev +'/**/*.js')
            .pipe(gulp.dest($path.dev_server))
    },

    prod: () => {
        return gulp.src($path.pre +'/**/*.js')
            .pipe(uglify())
            .pipe(gulp.dest($path.prod))
    }
};
