var angularJsdoc = require('./node_modules/angular-jsdoc/index.js');

angularJsdoc('./scripts', {
    configure: 'angular-jsdoc.json',
    template: './node_modules/angular-jsdoc/default',
    destination: 'docs',
    readme: "./README.md"
}, function() {
    console.log('DONE!!!!!!!!!!!!!!!!!');
});
