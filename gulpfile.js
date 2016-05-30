var gulp = require('gulp'),
    path = require('path'),
    $path = require('./$gulp/config').path
;

/* Server */
var $server = require('./$gulp/server');
gulp.task('dev_server', $server.dev);
gulp.task('prod_server', $server.prod);


/* Clean */
var $clean = require('./$gulp/clean');
gulp.task('dev_clean', $clean.dev);
gulp.task('prod_clean', $clean.prod);


/* HTML */
var $html = require('./$gulp/html');
gulp.task('dev_html', $html.dev);
gulp.task('prod_html', $html.prod);


/* Images */
var $image = require('./$gulp/image');
gulp.task('dev_img', $image.dev);
gulp.task('prod_img', $image.prod);


// Sprites
var $sprite = require('./$gulp/sprite');
gulp.task('dev_sprite', $sprite.dev)
gulp.task('prod_sprite', $sprite.prod)


/* CSS */
var $css = require('./$gulp/css'),
    parser_dev_css = $css.dev($server.dev_reload)
;
gulp.task('dev_css', parser_dev_css);
gulp.task('prod_css', $css.prod);


/* script */
var $script = require('./$gulp/script');
gulp.task('dev_js', $script.dev)
gulp.task('prod_js', $script.prod)


/* Watch */
var initWatcher = (arr, fn) => {
    // var temp = gulp.watch(arr, fn);
    var watcher = gulp.watch(arr).on('change', function(file){
        console.log(file + ' changed...');
        fn.apply(this);
    });
    return watcher;
};
gulp.task('dev_watcher', function(){
    initWatcher([$path.dev +'/**/*.html'], gulp.series('dev_html', $server.dev_reload))
    initWatcher([$path.dev +'/**/*.js'], gulp.series('dev_js', $server.dev_reload))
    initWatcher([$path.dev +'/css/**/*.{css,scss}'], gulp.series('dev_css'));
    initWatcher([$path.dev +'/sprites/**/*.{jpg,png}'], gulp.series('dev_sprite'));
    initWatcher([$path.dev +'/images/**/*.{png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}'], gulp.series('dev_img'));
});


gulp.task('default', gulp.series('dev_clean', 'dev_sprite', gulp.parallel('dev_html', 'dev_css', 'dev_js', 'dev_img'), gulp.parallel('dev_server', 'dev_watcher') )
);

gulp.task('dist', gulp.series('prod_clean', 'prod_sprite', gulp.parallel('prod_html', 'prod_css', 'prod_js', 'prod_img'), gulp.parallel('prod_server') ) )
