define(['models/linkModel'], function (LinkModel) {

	'use strict';

	describe('link model', function () {

		var collection,
		    mockData = {links: 'http:google.com'};

		beforeEach(function () {
			collection = new LinkModel([mockData], { parse: true });
		});

		afterEach(function () {
			collection.reset();
		});
		
		it('should be instantiated', function () {
			expect(collection).to.be.ok;
			expect(collection).to.be.an.instanceof(LinkModel);
		});

		it('should scape collection of urls', function () {
			expect(collection.url).to.equal('/scrape');
			expect(collection).to.respondTo('fetch');
		});

		it('should parse data on instantiation', function () {
			expect(collection).to.have.length(1);
		});

		it('should parse to JSON', function () {
			var collectionJSON = collection.toJSON();
			expect(collectionJSON[0]).to.include.keys('links')
		});

	});

});