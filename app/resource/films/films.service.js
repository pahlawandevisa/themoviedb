angular.module('app').service('FilmSrv', function (
    $http
) {
    const url = '/api/'
    var shared = '';
    var observerCB = [];

    var notifyObserver = function () {
        observerCB.forEach(function (cb) {
            cb();
        })
    }
    var registerObserverCB = function (cb) {
        observerCB.push(cb);
    }

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
    var setShared = function (value) {
        shared = value;
        notifyObserver();
    };

    var getShared = function () {
        return shared;
    };

    var remove = function (id) {
        return $http({
            method: 'DELETE',
            url: url + 'films/' + id
        });
    };


    return {
        getAll,
        getOne,
        setShared,
        shared,
        registerObserverCB,
        getShared,
        remove
    }

});