module.exports = (function () {
    var Genre = require('./genre.model.js')
    var Film = require('./../films/film.model.js')

    var getAll = function (req, res) {
        Genre.find()
            .exec()
            .then(function (genres) {
                res.status(200).json(genres);
            })
            .catch(function (err) {
                res.status(500).send(err);
            })

    }
    var removeOne = function (req, res) {
        Genre.findByIdAndRemove(req);
    }

    return {
        getAll: getAll,
        removeOne: removeOne

    }
})();