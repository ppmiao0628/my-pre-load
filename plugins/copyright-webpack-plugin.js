const { compilation } = require("webpack");

class CopyRightWebpackPlugin {
    constructor() {
        console.log('CopyRightWebpackPlugin is used')
    }
    apply(compiler){
        compiler.hooks.compile.tap('CopyRightWebpackPlugin', (compilation)=>{
            console.log('hooks', 'compiler.hooks.compile');
        }) 
        compiler.hooks.emit.tapAsync('CopyRightWebpackPlugin', (compilation, cb)=>{
            debugger
            console.log('hooks', 'compiler.hooks.emit');
            compilation.assets['copyright.txt'] = {
                source: function() {
                    return 'copyright ppm'
                },
                size: function() {
                    return 13;
                }
            };
            cb();
        })
    }
}
module.exports = CopyRightWebpackPlugin;