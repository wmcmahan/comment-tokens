define([
	'backbone',
	'views/postInputView'
], function (
	Backbone,
	PostInputView
) {

	'use strict';

	/**
	 * Append Comment Post Field to DOM
	 */

	$('#content').append((new PostInputView()).render().el);
});