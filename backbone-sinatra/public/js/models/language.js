var app = app || {};

(function () {
	'use strict';

	app.Language = Backbone.Model.extend({
		defaults: {
			name: "",
			description: ""
		}
	})
})();