const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
	},
	optimization: {
		splitChunks: {
			// include all types of chunks
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
							plugins: [
								'@babel/plugin-proposal-class-properties',
								'@babel/plugin-proposal-object-rest-spread',
							],
						},
					},
				],
			},
			{
				test: /\.(otf|ttf)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './fonts',
							publicPath: '../fonts',
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: './images',
							name: '[contenthash].[ext]',
							publicPath: '../images',
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								quality: 65,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: '65-90',
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
						},
					},
				],
			},
			// {
			// 	test: /\.(mp4)$/,
			// 	use: {
			// 		loader: 'file-loader',
			// 		options: {
			// 			outputPath: './images',
			// 			name: '[contenthash].[ext]',
			// 			publicPath: '../images/',
			// 		},
			// 	},
			// },
			{
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('autoprefixer')({
									browsers: ['> 1%', 'last 2 versions'],
								}),
							],
						},
					},
					{
						loader: 'resolve-url-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(mp4)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							fallback: 'file-loader',
							name: '[name].[ext]',
							outputPath: './videos',
							publicPath: './videos',
						},
					},
				],
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {
						// minimize: true,
						attrs: ['img:src', 'link:href', 'source:src', 'video:src'],
					},
				},
			},
		],
	},
	plugins: [
		//uses our html file and outputs a copy with js inserted into it for us
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/[contenthash].css',
		}),
		new CleanWebpackPlugin(),
	],
};
