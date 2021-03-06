module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "My First Gatsby Site",
	},
	plugins: [
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		// {
		// 	resolve: "gatsby-source-filesystem",
		// 	options: {
		// 		name: "images",
		// 		path: "./src/images/",
		// 	},
		// 	__key: "images",
		// },
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
		"gatsby-plugin-mdx",
	],
};
