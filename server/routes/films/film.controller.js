module.exports = (function () {
    var Film = require('./film.model.js')

    var getAll = function (req, res) {
        Film.find()
            .lean()
            .populate({ path: 'genre', select: 'name -_id' })
            .exec()
            .then(function (films) {

                res.status(200).json(films);
            })
            .catch(function (err) {
                res.status(500).send(err);
            })

    }

    var getOne = function (req, res) {
        Film.findById(req.params.id)
            .populate({ path: 'genre', select: 'name -_id' })
            .exec()
            .then(function (film) {
                res.status(200).json(film);
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }
    var getByQuery = function (req, res) {
        Film.find({ title: req.query.title })
            .exec()
            .then(function (film) {
                res.status(200).json(film);
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    var insertOne = function (req, res) {
        var nuovoFilm = new Film(req.body);
        nuovoFilm.save(nuovoFilm)
            .then(function (data) {
                res.status(200).json(data);
            })
            .cacth(function (err) {
                res.status(500).send(err);

            });

    }

    return {
        getAll: getAll,
        getOne: getOne,
        getByQuery: getByQuery,
        insertOne: insertOne
    }
})();