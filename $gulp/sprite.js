var path = require('path'),
    $path = require('./config').path,
    $sprite = require('hi-gulp-sprites');


var $sprite_cfg = {
    outputCss: {
        fileType: 'scss',
        fileName: '_mixin.sprites',
        prefix: 'sp-',
        template: 'scss'
        // template: (data) => {
        //     return `%${data.name}{
        //                 background-image: url(${data.url});
        //                 background-position:${data.position.x} ${data.position.y};
        //             }`
        // }
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
            fileType: $sprite_cfg.outputCss.fileType,
            fileName: $sprite_cfg.outputCss.fileName,
            path: path.join($path.dev, 'css/sprites'),
            prefix: $sprite_cfg.outputCss.prefix,
            template: $sprite_cfg.outputCss.template
        }
    }),

    prod: $sprite.init({
        source : path.join($path.pre, 'sprites'),
        outputImg: {
            commonFile: 'common.min',
            path: path.join($path.prod, 'images/sprites')
        },
        outputCss: {
            fileType: $sprite_cfg.outputCss.fileType,
            fileName: $sprite_cfg.outputCss.fileName,
            path: path.join($path.pre, 'css/sprites'),
            prefix: $sprite_cfg.outputCss.prefix,
            template: $sprite_cfg.outputCss.template
        }
    })
}
