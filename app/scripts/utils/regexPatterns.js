define([], function () {
	'use strict';

	var regexPattern = {
		mentions: /\B@[a-z0-9_-]+/gi,
		emoticons: /\((\S[\x00-\x7F][^)]+)\)/g,
		links: /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[{};:'".,<>?«»“”‘’]|\]|\?))/ig
	};

	return regexPattern;
});