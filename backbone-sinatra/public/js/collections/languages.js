var app = app || {};

(function () {
	'use strict';

	var Languages = Backbone.Collection.extend({
		model: app.Language,
		url: "languages"
	});

	app.languages = new Languages();
})();