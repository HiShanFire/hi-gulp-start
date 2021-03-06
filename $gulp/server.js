var $path = require('./config').path,
    bs = require('browser-sync');

var devServer = bs.create(),
    prodServer = bs.create()
;


module.exports = {
    dev_server : devServer,
    dev_reload : devServer.reload,
    dev : ()=>{
        devServer.init({
            server: {
                baseDir: $path.dev_server,
                directory: true,
                proxy: {
                    target: 'http://de.bug',
                    middleware: (req, res, next) => {
                        console.log(req.url)
                        next()
                    }
                }
            }
        });
    },

    prod_server : prodServer,
    prod_reload : prodServer.reload,
    prod : ()=>{
        prodServer.init({
            port: 9888,
            ghostMode: false,
            server: {
                baseDir: $path.prod,
                directory: true
            }
        });
    }
}
