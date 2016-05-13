module.exports = {
    path : {
        dev : 'src', // 开发目录
        dev_server:  '.tmp', // 预览目录
        pre : 'src', // 预生产目录
        prod : 'dist' // 生产目录
    },

    autoprefixer: [
        'last 3 versions'
    ,   'ie >= 10'
    ,   'ie_mob >= 10'
    ,   'ff >= 30'
    ,   'chrome >= 34'
    ,   'safari >= 6'
    ,   'opera >= 12.1'
    ,   'ios >= 6'
    ,   'android >= 4.4'
    ,   'bb >= 10'
    ,   'and_uc 9.9'
    ]
};
