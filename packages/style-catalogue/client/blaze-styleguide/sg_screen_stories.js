SG.register("sgScreen")
    .add("default", function() {
        return {
            screens: SG.screens,
            selected: function() {
                return (this.name === SG.screens[0].name);
            },
            action: function() {}
        };
    });
