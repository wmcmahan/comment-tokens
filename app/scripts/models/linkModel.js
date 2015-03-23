define(['backbone'], function (Backbone) {
    
    'use strict';

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