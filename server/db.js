var mongoose = require('mongoose');
// var dbconnect = process.env.connect || 'mongodb://localhost:27017';
mongoose.
    connect('mongodb://localhost:27017/themoviesdb',
    { useMongoClient: true },
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("connesso al db");
        }
    });

