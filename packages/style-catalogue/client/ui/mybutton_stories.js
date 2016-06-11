SG.register("mybuttonR")
    .add("enabled", function() {
        return {
            enabled: function() {
                return true;
            },
            label: "enabled",
            action: function() {
                console.log("button clicked");
            }
        };
    })
    .add("disabled", function() {
        return {
            enabled: false,
            label: "disabled",
            action: function() {
                alert("shouldn't be called for disabled");
            }
        };
    })
    .add("primary", function() {
        return {
            enabled: function() {
                return true
            },
            class: "btn-primary",
            label: "Primary",
            action: function() {}
        };
    });
