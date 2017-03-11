"use strict";
// Imports.
const Handlebars = require('handlebars');

// Declaring exposed methods.
module.exports = {
    PageRouter: PageRouter,
};

// Implemntation details.
function PageRouter() {
    this.dispatcher = null;
}
PageRouter.prototype.pageOne = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Page One');
};

PageRouter.prototype.pageTwo = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    let template = Handlebars.compile('<div>Hello {{myName}}</div>');
    res.end(template({
        'myName': 'omri'
    }));
};

PageRouter.prototype.configureDispatcher = function(dispatcher) {
    this.dispatcher = dispatcher;
    this.dispatcher.onGet('/page1', this.pageOne);
    this.dispatcher.onGet('/page2', this.pageTwo);
};
