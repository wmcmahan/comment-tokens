define(['models/emoticonsModel'], function (EmoticonsModel) {

	'use strict';

	describe('emoticon model', function () {

		var model,
		    mockData = {emoticons: ['(yourmom)']};

		beforeEach(function () {
			model = new EmoticonsModel(mockData, { parse: true });
		});

		afterEach(function () {
			model.clear();
		});
		
		it('should be instantiated', function () {
			expect(model).to.be.ok;
			expect(model).to.be.an.instanceof(EmoticonsModel);
		});

		it('should parse data on instantiation', function () {
			var emoticonArray = model.get('emoticons');
			expect(model.attributes).to.include.key('emoticons');
			expect(emoticonArray).to.be.instanceof(Array);
			expect(mockData.emoticons[0].replace(')', '').replace('(','')).to.equal(emoticonArray[0]);
			expect(emoticonArray).to.have.length(1);
		});

		it('should parse to JSON', function () {
			var modelJSON = model.toJSON();
			expect(modelJSON).to.have.length(1);
			expect(modelJSON).to.include('yourmom');
		});

	});

});