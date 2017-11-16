angular.module('app').controller('filmCtrl', function (film, FilmsSrv) {
    var mv = this;
    mv.film = film.data;


    mv.stelle = [
        {
            colorata: false,
        },
        {
            colorata: false,
        },
        {
            colorata: false,
        },
        {
            colorata: false,
        },
        {
            colorata: false,
        }];

    mv.colora = function (indice) {
        console.log(indice);
        for (let i = 0; i <= indice; i++) {
            mv.stelle[i].colorata = true;
        }
    }
    mv.decolora = function () {
        mv.stelle.forEach(stella => {
            stella.colorata = false;
        });
    }
    mv.vota = function (indice) {
        var voto = {
            'voto_nostro': (indice + 1) * 2
        }
        FilmsSrv.setRating(mv.film._id, voto)
            .then(function(result) {
                // console.log(result.data);
                
                mv.film = result.data;
            })
            .catch(function (err) {
                console.log(err);
            })

    }
});