const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const pageEntry = require('./page.entry');

const distPath = path.resolve('./Scripts/build');

module.exports = env => {
    let buildMode = (env && env.mode) ? env.mode : `development`;
    console.log(`mode:${buildMode}`);

    return {
        mode: buildMode,
        entry: pageEntry,
        devtool: 'sourcemaps',
        output: {
            path: distPath,
            filename: `[name].bundle.js`
        },
        optimization: {
            splitChunks: {
                name: `vendor`,
                chunks: `initial`
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                },
                {
                    test: /\.vue$/,
                    use: {
                        loader: 'vue-loader'
                    }
                }
            ]
        },
        resolve: {
            modules: [path.join(__dirname, 'src'), 'node_modules'],
            // importÇ∑ÇÈÇ∆Ç´Ç…è»ó™Ç≈Ç´ÇÈägí£éqÇÃê›íË
            extensions: ['.js', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    }
};