define(['models/mentionsModel'], function (MentionsModel) {

	'use strict';

	describe('mentions model', function () {

		var model,
		    mockData = {mentions: ['@yourmom', '@yourdad']};

		beforeEach(function () {
			model = new MentionsModel(mockData, { parse: true });
		});

		afterEach(function () {
			model.clear();
		});
		
		it('should be instantiated', function () {
			expect(model).to.be.ok;
			expect(model).to.be.an.instanceof(MentionsModel);
		});

		it('should parse data on instantiation', function () {
			var mentionArray = model.get('mentions');
			expect(model.attributes).to.include.key('mentions');
			expect(mentionArray).to.be.instanceof(Array);
			expect(mockData.mentions[0].replace('@', '')).to.equal(mentionArray[0]);
			expect(mentionArray).to.have.length(2);
		});

		it('should parse to JSON', function () {
			var modelJSON = model.toJSON();
			expect(modelJSON).to.have.length(2);
			expect(modelJSON).to.include('yourmom');
			expect(modelJSON).to.include('yourdad');
		});

	});

});