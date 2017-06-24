module.exports = function (app) {
    app.get('/api/product', function (req, res) {
        res.send('this is product api');
    });

    app.get('/api/product/:id', function (req, res) {
        res.send(req.params);
    });

    app.post('/api/product', function (req, res) {
        res.send(req.body);
    });

    app.delete('/api/product', function (req, res) {
        res.send(req.body);
    });

}

// function add(){
//         return 2;
// }

// module.exports.add = add();
// module.exports = 
// {
//     add : add
// }