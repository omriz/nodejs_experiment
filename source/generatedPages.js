// Declaring exposed methods.
module.exports = {
    pageOne: pageOne,
};

// Implemntation details.
function pageOne(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One');
}   