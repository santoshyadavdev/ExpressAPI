module.exports = function (app) {

  app.get('/api/employee', function (req, res) {
        res.send('this is employee');
    });

    app.get('/api/employee/:id', function (req, res) {
        res.send(req.params);
    });

    app.post('/api/employee', function (req, res) {
      
        res.send(req.body);
    });

     app.delete('/api/employee', function (req, res) {
        res.send(req.body);
    });

}