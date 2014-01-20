var app = app || {};

(function () {
	'use strict';

	app.Snippet = Backbone.Model.extend({
		defaults: {
			title: "",
			content: "",
			description: "",
			language_id: 0,
			user_id: 0,
			score: 0
		},

		upvote: function() {
			this.save({
				score: this.get('score') + 1
			});
		},

		downvote: function() {
			this.save({
				score: this.get('score') - 1
			});
		}
	})
})();