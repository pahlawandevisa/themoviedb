angular.module('app').controller('filmCtrl', function (
    $scope,
    toastr,
    FilmSrv,
    $rootScope,
) {

    // broadcast del padre
    $scope.$on('main-films', function (event, val) {
        $scope.shared = val;

    })

    $scope.all = true;
    var start = function () {
        FilmSrv.getAll()
            .then(function (result) {
                $scope.all = true;
                $scope.films = result.data;
            })
            .catch(function (err) {
                console.log(err)
            })
    };
    $scope.detail = function (id) {
        FilmSrv.getOne(id)
            .then(function (result) {
                $scope.all = false;
                $scope.film = result.data;
                toastr.success('Ottima scelta!!', $scope.film.title);
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    $scope.start = function () {
        start();
    }

    var updateShared = function () {
        $scope.shared = FilmSrv.getShared();
    }

    FilmSrv.registerObserverCB(updateShared);

    start();


})