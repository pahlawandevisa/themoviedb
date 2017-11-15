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

    return {
        getAll,
        getOne
    }
});