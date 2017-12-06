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
    var voteOne = function (req, res) {
        Film.findById(req.params.id)
            .exec()
            .then(function (film) {
                var count = film.vote_count;
                var voti = count + 1;
                var media = film.vote_average;
                var nuovovoto = req.body.voto_nostro;
                var calcolo = ((media * count) + nuovovoto) / voti;
                film.vote_average = calcolo;
                film.vote_count = voti;
                return film.save();

            }).then(function (film) {
                return res.status(200).json(film);
            })
            .catch(function (err) {

            });
    }

    var remove = function (req, res) {
        Film.findByIdAndRemove(req.params.id)
            .exec()
            .then(function (film) {
                res.status(200).json(film);
            })
            .catch(function (err) {

            });
    }
    
    var update = function (req, res) {
        Film.findByIdAndUpdate(req.params.id, { $set: req.body })
            .exec()
            .then(function (film) {
                console.log('film aggiornato');
                res.status(200).json(film);
            })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    return {
        getAll: getAll,
        getOne: getOne,
        getByQuery: getByQuery,
        insertOne: insertOne,
        voteOne: voteOne,
        remove: remove,
        update: update
    }
})();