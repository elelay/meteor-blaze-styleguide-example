Template.mybuttonS.onCreated(function(){
	this.clicksRemaining = new ReactiveVar(3);
});

Template.mybuttonS.helpers({
		data: function(){
			var self = Template.instance();
			return {
				label: function(){
					return "CLICK ME (" + self.clicksRemaining.get() + ")";
				},
				enabled: function(){
					return self.clicksRemaining.get() > 0;
				},
				action: function(){
					self.clicksRemaining.set(self.clicksRemaining.get() - 1);
				},
				class: function(){
					return "btn-interactive";
				}
			};
		}
});