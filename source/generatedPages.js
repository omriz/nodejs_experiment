"use strict";
// Imports.
const Handlebars = require('handlebars');

// Constants.
const TEMPLATE_ROOT = './templates';

// Declaring exposed methods.
module.exports = {
    PageRouter: PageRouter,
};

// PageRouter class.
// TODO(omri): Add a loading for handlebars templates.
// Constructor.
function PageRouter() {
    this.dispatcher = null;
}

// Configuring routes.
PageRouter.prototype.configureDispatcher = function(dispatcher) {
    this.dispatcher = dispatcher;
    this.dispatcher.onGet('/page1', this.pageOne);
    this.dispatcher.onGet('/page2', this.pageTwo);
};

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
