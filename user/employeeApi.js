module.exports = function (app, db, ObjectID) {

    app.get('/api/employee', function (req, res) {
        res.send('this is employee');
    });

    app.get('/api/employee/:_id', function (req, res) {
        console.log(req.params);
        console.log(ObjectID);
        var ObjectId = new ObjectID(req.params._id);
        console.log(ObjectId);
        db.collection('employee').find({ _id: ObjectId }).toArray(function (err, result) {
            console.log(result);
            res.send(result);
        });
    });

    app.post('/api/employee', function (req, res) {
        console.log(req.body);
        db.collection('employee').insertOne(req.body).then(function (result) {
            console.log(result);
            res.send(result.insertedId);
        })
    });

    app.put('/api/employee', function (req, res) {
            console.log(req.body);
        db.collection('employee').updateOne(
            { name: 'Santosh' },
            {
                $set: { adress: 'pune' }
            }).then(function (result) {
                console.log(result);
                res.send(result);
            })
    });

    app.delete('/api/employee', function (req, res) {
        res.send(req.body);
    });

}