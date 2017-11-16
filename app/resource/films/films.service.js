angular.module('app').service('FilmsSrv', function ($http) {

    var getAll = function () {
        return $http({
            method: 'GET',
            url: 'api/films'
        });
    }

    var getOne = function (id) {
        return $http({
            method: 'GET',
            url: 'api/films/' + id
        });
    }

    var setRating = function (id, voto) {
        return $http({
            method: 'PUT',
            url: 'api/films/voto/' + id,
            data: voto
        });
    }

    return {
        getAll,
        getOne,
        setRating
    }
});