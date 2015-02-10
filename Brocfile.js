var uglify 		=	require('broccoli-uglify-js'),
	mergeTrees  =	require('broccoli-merge-trees'),
	sass		=	require('broccoli-sass');


//var lib = 'lib';
var path = {
	scripts : 'assets/js',
	sass  	: 'assets/scss'
};
// var styles = 'public/dev/assets/scss';
var appCss 	= sass([path.sass], 'master.scss', 'assets/css/master.css');
var appJs 	= uglify(path.scripts, {
    // mangle: false,
    compress: true,
    // output: 'public/dist/assets/js'
  });

module.exports = mergeTrees([appCss,appJs,'views']);