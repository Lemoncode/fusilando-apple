module.exports = {
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
