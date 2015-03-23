define([
	'backbone',
	'views/postInputView'
], function (
	Backbone,
	PostInputView
) {
    
    'use strict';

	$('#content').append((new PostInputView()).render().el);
});
