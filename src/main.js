var requirejs = require('requirejs');

requirejs.config({
    baseUrl: __dirname,
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

requirejs(['foo'],
    function   (foo) {
        console.log(foo.bar);
    }
);
