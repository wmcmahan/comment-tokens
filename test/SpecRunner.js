require.config({
    baseUrl: '../app/scripts',

    paths: {
        'spec': '../../test/spec',
        'jquery': '../bower_components/jquery/jquery',
        'backbone': '../bower_components/backbone/backbone',
        'underscore': '../bower_components/underscore/underscore',
        'text': '../bower_components/requirejs-text/text',
        'react': '../bower_components/react/react',
        'react.backbone': '../bower_components/react.backbone/react.backbone',
        'tmpl': "../partials"
    }
});

require([
    'spec/testSuite'
],
function(testSuite) {
    'use strict';

    require(testSuite.specs, function () {
        mocha.run();
    });
});
  