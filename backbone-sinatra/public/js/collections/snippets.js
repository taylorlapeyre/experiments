var app = app || {};

(function () {
	'use strict';

	var Snippets = Backbone.Collection.extend({
		model: app.Snippet,
		url: "/snippets",

		onlyLanguageId: function(id) {
			return this.filter(function (snippet) {
				return snippet.get('language_id') == id;
			});
		},
	});

	app.snippets = new Snippets();

	app.snippets.on("add", function(snippet) {
		var snippetview = new app.SnippetView({model: snippet});
		$('.snippets').append(snippetview.render().el);
	});
})();