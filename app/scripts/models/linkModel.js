define(['backbone'], function (Backbone) {
    
    'use strict';

    /**
	 * LinkModel Class:
	 * Fetches and stores scraped site titles
	 
	 * @param {arr} matches
	 * @param {object} {parse:true}
	 */

	var LinkModel = Backbone.Collection.extend({
		url: '/scrape',
		initialize: function (opt) {
			var options = opt || {};
			
			if (options.links) {
				this.fetch({ data: { url: opt.links }});
			}
		},
		toJSON: function() {
			return this.map(function (model) {
				return model.toJSON();
			});
		}
	});

	return LinkModel;
});