var mongoose = require('mongoose');
var remoto = 'mongodb://<dbuser>:<dbpassword>@ds157185.mlab.com:57185/';
var locale = 'mongodb://localhost:27017';
mongoose.
    connect(locale + '/themoviesdb',
    { useMongoClient: true },
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("connesso al db");
        }
    });

