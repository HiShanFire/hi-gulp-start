var $path = require('./config').path,
    gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify')
;

module.exports = {
    dev: () => {
        return gulp.src($path.dev +'/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest($path.dev_server))
    },

    prod: () => {
        return gulp.src($path.pre +'/**/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(uglify())
            .pipe(gulp.dest($path.prod))
    }
};
