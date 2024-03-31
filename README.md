live url: https://react-machine-coding-projects.netlify.app/



1. if we try to import one js file into another file, then it will give error
error: Uncaught SyntaxError: Cannot use import statement outside a module
fix :: we need to install `npm i webpack webpack-cli` and create webpack.config.js file(nodejs file) in root folder

2. if we try to render the jsx into root.render() from reactDOM package, then it gives error
error: You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file
fix :: install loader or use react.createElement
install `npm i @babel/core --save-dev`
install `npm i babel-loader @babel/preset-env @babel/preset-react`
create the .babelrc file to add all preset use by babel to convert jsx/es6+ code to es5;
.babelrc - add all preset into "presets": [] array
update the rules in webpack.config.js file as well to use this babel-loader.

3. css iomport 
fix:: install the css-loader nad style-loader, add them into webpack.config.js rules.
css-loader - used to parse the css
style-loader - used to inject the style into code

4. use index.scss file  - insatll `npm i sass-loader sass`
sass - for .scss filess
sass-loader  - for normal sass files

5. remove all React import from files after 18th version, it gives error in browser
fix: add plugins: [ new webpack.ProvidePlugin({React: 'react})].


6. crteate own dev server using webpack-dev-server package adn add it to start script

7. handle routing using react-router-dom
if we reload the page at localhost:8080/about then it gives error as this request goes to webpack server first
fix: webpack.config.js file

8. handle .js and .jsx file extentionss
fix: add resolusion: { extentions: ['.js', '.jsx]} in webpack.config.js file

9. handle images of different format
fiox: install file-loader and add rules


10: handle the error routing in browser to respective file
fix: add devtool to webpack.config.js file

11. handle reload page errir in netlify 
fix: add _redirects file to public folder

12: how to avoid long relative path ../.../..
fix: add alias in webpack.config.js file

13. how to handle the environment variable
fix: install dotenv package and add new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env)}) into webpack.config.js  file


14. how to optimize it, reduce the size
fix: make a build folder for production webpack.prod.js
keep public for dev  - webpack.dev.js
install `npm i html-webpack-plugin` to create index.html in build forlder and add new HtmlWebpackPlugin({
            template: './public/template.html'}) in webpack.prod.js 
 - add clean:true in output config for production to clean before build script


15. how to seperate the css file
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

16. how to handle different env files
fix: create .env.dev and .env.prod files 
and update the path in respective webpack.config file
require('dotenv').config({
    path: './.env.prod'
})

17. add env variabel to respective host website




