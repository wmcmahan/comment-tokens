define([
	'backbone',
	'views/jsonStringView',
	'models/commentModel',
	'utils/regexPatterns',
	'text!tmpl/comment_tpl.html',
], function (
	Backbone,
	JSONStringView,
	CommentModel,
	regexPattern,
	comment_tpl
) {

	'use strict';

	/**
	 * InputView Class:
	 * Consumes String and creates CommentModels for each match
	 * Renders newly formed JSON string view
	 */

	var InputView = Backbone.View.extend({
		tagName: 'form',
		template: _.template(comment_tpl),
		events: {
			'submit': 'onPostComment'
		},
		render: function () {
			this.$el.html(this.template());
			return this;
		},
		processString: function (str) {
			if (!_.isString(str)) { return false; }

			var model = {};

			_.each(regexPattern, _.bind(function (regx, key) {
				model[key] = this.parseString(regx, str);
			}, this));

			this.model = new JSONStringView({ model: new CommentModel(model, { parse: true }) });
			this.$('#json-string').html(this.model.render().el);
		},
		parseString: function (regx, str) {
			if (!_.isRegExp(regx) && !_.isString(str)) { return false; }
			return str.match(regx) || [];
		},
		onPostComment: function (e) {
			e.preventDefault();
			this.processString(this.$('textarea').val());
		}
	});

	return InputView;
});