Package.describe({
    summary: "my own components",
    version: "1.0.0",
    name: "example:ui",
});

function configurePackage(api) {
    api.versionsFrom("1.3");

    var impliedPackages = ["standard-minifiers",
        "templating", "reactive-var",
        "twbs:bootstrap@3.3.6"
    ];
    api.use(impliedPackages);
    api.imply(impliedPackages);

    api.addFiles([]);

    api.addFiles([], ["server"]);

    api.addFiles([
        "client/mybutton_r.html",
        "client/mybutton_r.js",
        "client/mybutton_s.html",
        "client/mybutton_s.js",
        "client/mybutton_s.css"
    ], ["client"]);

}

Package.onUse(configurePackage);

Package.onTest(function(api) {
    configurePackage(api);
});
