module.exports = {
    entry : "./main.js",
    output : {
        path : __dirname,
        filename : 'build.js'
    },
    module : [
        {
            test:/\.vue$/,
            loader : 'vue'},
        {
            test:/\.js$/,
            exclude : '/node_modules/',
            loader : "babel"
        }
    ]/*,
    babel : {
        presets : ['es2015'],
        plugins : ['transforn-runtime']
    }*/

}