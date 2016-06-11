Package.describe({
    summary: "my own components in blaze-styleguide",
    version: "1.0.0",
    name: "example:style-catalogue",
    debugOnly: true
});

function configurePackage(api) {
    api.versionsFrom("1.3");

    var impliedPackages = ["ell:blaze-styleguide@1.0.0",
        "example:ui"
    ];
    api.use(impliedPackages);
    api.imply(impliedPackages);

    api.addFiles([]);

    api.addFiles([], ["server"]);

    api.addFiles([
        "client/init_styleguide.js",
        "client/blaze-styleguide/sg_screen_stories.js",
        "client/ui/mybutton_stories.js"
    ], ["client"]);

}

Package.onUse(configurePackage);

Package.onTest(function(api) {
    configurePackage(api);
});
