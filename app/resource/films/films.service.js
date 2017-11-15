angular.module('app').service('FilmsSrv', function ($http) {

    var getAll = function () {
        return $http({
            method: 'GET',
            url: 'api/films'
        });
    }

    return {
        getAll
    }
});