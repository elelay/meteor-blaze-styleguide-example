Template.mybuttonR.helpers({
		disabledAttr: function(){
			return (this.enabled && this.enabled()) ? "": "disabled";
		}
});

Template.mybuttonR.events({
		"click": function(){
			return this.action();
		}
});