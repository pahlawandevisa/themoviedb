angular.module('app').service('FilmSrv', function (
    $http
) {
    const url = '/api/'
    var getAll = function () {
        return $http({
            method: 'GET',
            url: url + 'films'
        });
    }
    var getOne = function (id) {
        return $http({
            method: 'GET',
            url: url + 'films/' + id
        });
    }

    return {
        getAll,
        getOne
    }

});