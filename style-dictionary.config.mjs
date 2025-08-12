export default {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transforms: ["attribute/cti"],
      buildPath: "lib/styles/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          selector: ":root",
        },
      ],
    },
  },
};
