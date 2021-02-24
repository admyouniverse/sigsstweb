const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



// mix.webpackConfig(webpack => { return {
//     resolve      : { symlinks: false },
//     watchOptions : { ignored: /node_modules/ },
//     output       : { publicPath: '/', chunkFilename: '[name].js' },
//     plugins      : [new webpack.DefinePlugin({ '__VUE_OPTIONS_API__': 'true', '__VUE_PROD_DEVTOOLS__': 'false' })],
// }});

// // mix.webpackConfig({
// //     entry: {
// //         main: ['./resources/sass/app.scss']
// //     }
// });


// mix.extract(['vue', 'jquery', 'axios']);


// mix.js('resources/js/app.js', 'public/js');
    

mix.sass('resources/sass/app.scss', 'public/css');

    
