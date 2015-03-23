define([
	'backbone',
	'models/mentionsModel',
	'models/emoticonsModel',
	'models/linkModel'
], function (
	Backbone,
	MentionsModel,
	EmoticonsModel,
	LinkModel
) {

	'use strict';

	/**
	 * CommentModel Class:
	 * Creates and stores {model} for each match
	 */

	var CommentModel = Backbone.Model.extend({
		model: {
			mentions: MentionsModel,
			emoticons: EmoticonsModel,
			links: LinkModel
		},
		parse: function (data) {
			var model = {};

			_.each(data, function (val, key) {
				if (!val.length) { return false };

				var match = {}
				var MatchModel = this.model[key]; 
					match[key] = val;

				model[key] = new MatchModel(match, { parse: true });

			}, this);

			return model;
		}

	});

	return CommentModel;
});