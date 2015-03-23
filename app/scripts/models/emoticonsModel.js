define(['backbone'], function (Backbone) {

	'use strict';

	/**
	 * EmoticonsModel Class:
	 * Cleans and stores found emoticon matches
	 
	 * @param {objec} matches
	 * @param {object} {parse:true}
	 */

	var EmoticonsModel = Backbone.Model.extend({
		parse: function (data, opt) {
			var data = data || { emoticon: [] };
			var tooLong = [];

			for (var i = 0; i < data.emoticons.length; i++) {
				data.emoticons[i] = data.emoticons[i].replace(')', '').replace('(','');

				if (data.emoticons[i].length > 15) {
					tooLong.push(data.emoticons[i]);
				}
			}
			data.emoticons = _.without(data.emoticons, tooLong.join());
			
			return data;
		},
		toJSON: function() {
			return _.clone(this.get('emoticons'));
		}
	});

	return EmoticonsModel;
});