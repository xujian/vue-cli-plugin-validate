module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
    }
  });

  api.render(
    {
      "./src/plugins/validate/index.js": "./templates/plugins/validate/index.js"
    },
    options
  );

  api.onCreateComplete(() => {
  });
};
