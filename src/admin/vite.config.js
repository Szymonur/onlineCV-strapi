const { mergeConfig } = require("vite");

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
	server: {
		allowedHosts: ["cms.jakubisanski.pl"]
	},
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};

