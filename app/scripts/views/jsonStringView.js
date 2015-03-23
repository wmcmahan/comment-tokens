define([ 'backbone'], function (Backbone) {

	'use strict';

	var JSONStringView = Backbone.View.extend({
		template: _.template('<pre><%= json %></pre>'),
		initialize: function () {
			_.each(this.model.toJSON(), function (model, key) {
				this.listenTo(this.model.get(key), 'all', this.render);
			}, this);
		},
		render: function () {
			this.$el.html(this.template({ json: this.toJSON(this.model) }));
			return this;
		},
		toJSON: function (model) {
			_.each(model.toJSON(), function (val, key) {
				model[key] = val.toJSON();
			});
			return JSON.stringify(model, null, 2);
		}
	});

	return JSONStringView;
});