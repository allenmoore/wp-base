/* global module */

// Webpack settings exports.
module.exports = {
	entries: {
		// JS files.
		'frontend': './src/js/frontend.js',

		// CSS files.
		'style': './src/css/style.css'
	},
	filename: {
		js: 'js/[name].js',
		css: 'css/[name].css'
	},
	paths: {
		src: {
			base: './src/',
			css: './src/css/',
			js: './src/js/'
		},
		dist: {
			base: './dist/',
			clean: ['./images', './css', './js']
		},
	},
	stats: {
		// Copied from `'minimal'`.
		all: false,
		errors: true,
		maxModules: 0,
		modules: true,
		warnings: true,
		// Our additional options.
		assets: true,
		errorDetails: true,
		excludeAssets: /\.(jpe?g|png|gif|svg|woff|woff2)$/i,
		moduleTrace: true,
		performance: true
	},
	copyWebpackConfig: {
		from: '**/*.{jpg,jpeg,png,gif,svg,eot,ttf,woff,woff2}',
		to: '[path][name].[ext]'
	},
	ImageminPlugin: {
		test: /\.(jpe?g|png|gif|svg)$/i
	},
	BrowserSyncConfig: {
		host: 'localhost',
		port: 3000,
		proxy: 'http://jccconnect.test',
		open: false,
		files: [
			'**/*.html',
			'dist/js/**/*.js',
			'dist/css/**/*.css',
			'dist/svg/**/*.svg',
			'dist/images/**/*.{jpg,jpeg,png,gif}',
			'dist/fonts/**/*.{eot,ttf,woff,woff2,svg}'
		]
	},
	performance: {
		maxAssetSize: 100000
	},
	manifestConfig: {
		basePath: ''
	}
};
