"use strict";
// Imports.
const Handlebars = require('handlebars');
const fs = require('fs');

// Constants.
const TEMPLATE_ROOT = './templates';

// Declaring exposed methods.
module.exports = {
    configureDispatcher: configureDispatcher,
};

// Configuring routes.
function configureDispatcher(dispatcher) {
    initTemplates();
    dispatcher.setStatic('/static');
    dispatcher.setStaticDirname('static');
    dispatcher.onGet('/page1', pageOne);
    dispatcher.onGet('/page2', pageTwo);
    dispatcher.onGet('/page3', pageThree);
}

// Templates
let simple_tmpl = '';

function initTemplates() {
    simple_tmpl = Handlebars.compile(fs.readFileSync(TEMPLATE_ROOT + '/simple.html', 'utf8'));
}


function pageOne(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Page One');
}

function pageTwo(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    let template = Handlebars.compile('<div>Hello {{myName}}</div>');
    res.end(template({
        'myName': 'omri'
    }));
}

function pageThree(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    let title = 'Hello';
    let body = 'This is an interesting experiment';
    res.end(simple_tmpl({
        'title': title,
        'body': body,
    }));
};