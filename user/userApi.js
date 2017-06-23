module.exports = function (app) {

  app.get('/api/user', function (req, res) {
        console.log(req);
        res.send('get user');
    });

    app.get('/api/user/:id', function (req, res) {
        console.log(req);
        res.send(req.params);
    });

    app.post('/api/user', function (req, res) {
        console.log(req);
        res.send(req.body);
    });

}