require.config({
    baseUrl: "../scripts",

    deps: ['main'],

    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        }
    },

    paths: {
        'jquery': '../../bower_components/jquery/jquery',
        'backbone': '../../bower_components/backbone/backbone',
        'underscore': '../../bower_components/underscore/underscore',
        'text': '../../bower_components/requirejs-text/text',
        'tmpl': "../partials"
    }
});
