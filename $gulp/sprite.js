var path = require('path'),
    $path = require('./config').path,
    $sprite = require('hi-gulp-sprites');


var $sprite_cfg = {
    cssFile: '_mixin.sprites.css',
    baseUrl: '../images/sprites',
    prefix: 'sp-',
    template: (data) => {
        return `%${data.name}{
                    background-image: url(${data.url});
                    background-position:${data.position.x} ${data.position.y};
                }`
    }
}

module.exports = {
    dev: $sprite.init({
        source : path.join($path.dev, 'sprites'),
        outputImg: {
            commonFile: 'common.min',
            path: path.join($path.dev_server, 'images/sprites')
        },
        outputCss: {
            file: $sprite_cfg.cssFile,
            path: path.join($path.dev, 'css/sprites'),
            baseUrl: $sprite_cfg.baseUrl,
            prefix: $sprite_cfg.prefix,
            template: $sprite_cfg.template
        }
    }),

    prod: $sprite.init({
        source : path.join($path.pre, 'sprites'),
        outputImg: {
            commonFile: 'common.min',
            path: path.join($path.prod, 'images/sprites')
        },
        outputCss: {
            file: $sprite_cfg.cssFile,
            path: path.join($path.pre, 'css/sprites'),
            baseUrl: $sprite_cfg.baseUrl,
            prefix: $sprite_cfg.prefix,
            template: $sprite_cfg.template
        }
    })
}
