define(['backbone'], function (Backbone) {
    
    'use strict';

    /**
	 * MentionsModel Class:
	 * Cleans and stores found mentions matches
	 
	 * @param {obj} matches
	 * @param {object} {parse:true}
	 */

	var MentionsModel = Backbone.Model.extend({
		parse: function (data) {
			var data = data || { mentions: []};

			for (var i = 0; i < data.mentions.length; i++) {
				data.mentions[i] = data.mentions[i].replace('@', '');
			}
			return data;
	    },
		toJSON: function() {
			return _.clone(this.get('mentions'));
		}
	});

	return MentionsModel;
});