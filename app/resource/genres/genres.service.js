angular.module('app').service('GenreSrv', function (
    $http) {
    
    const url = '/api/'

    var getAll = function () {
        return $http({
            method: 'GET',
            url: url + 'genres'
        });
    }

    // API
    return {
        getAll,
    }

});