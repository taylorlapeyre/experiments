var app = app || {};

(function ($) {
	'use strict';

	app.SnippetView = Backbone.View.extend({
		className: 'snippet',
		template: _.template($('#snippet-template').html()),

		events: {
			'click .upvote': 'upvote',
			'click .downvote': 'downvote'
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		upvote: function() {
			this.model.upvote();
			return false;
		},

		downvote: function() {
			this.model.downvote();
			return false;
		}
	});
})(jQuery);