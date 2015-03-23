define([
	'models/commentModel',
	'utils/regexPatterns'
], function (
	CommentModel,
	regexPattern
) {

	'use strict';

	describe('comment model', function () {

		var model,
		    mockData = {
		    	emoticons: ['(yourmom)'],
		    	mentions: ['@yourmom', '@yourdad'],
		    	links: ['http://google.com']
		    };

		describe('valid matched tokens', function () {
			it('should contain valid matches', function () {
				expect(mockData.emoticons[0]).to.match(regexPattern.emoticons);
				expect(mockData.mentions[0]).to.match(regexPattern.mentions);
				expect(mockData.links[0]).to.match(regexPattern.links);
			});
		});

		describe('model parse', function () {

			beforeEach(function () {
				model = new CommentModel(mockData, { parse: true });
			});

			afterEach(function () {
				model.clear();
			});
			
			it('should be instantiated', function () {
				expect(model).to.be.ok;
				expect(model).to.be.an.instanceof(CommentModel);
			});

			it('should include model list', function () {
				expect(model.model).to.be.ok;
				expect(model.model).to.include.key('emoticons');
				expect(model.model).to.include.key('mentions');
				expect(model.model).to.include.key('links');
			});

			it('should parse to JSON', function () {
				var modelJSON = model.toJSON();
				expect(modelJSON).to.include.key('emoticons');
				expect(modelJSON).to.include.key('mentions');
				expect(modelJSON).to.include.key('links');

				expect(modelJSON.emoticons.get('emoticons')).to.be.instanceof(Array)
				expect(modelJSON.mentions.get('mentions')).to.be.instanceof(Array)
				expect(modelJSON.links.models).to.be.instanceof(Array)
			});
		});

	});

});