angular.module('app').controller('filmCtrl', function (
    $rootScope,
    $scope,
    toastr,
    FilmSrv,
    GenreSrv
) {

    $scope.all = true;

    // broadcast del padre
    $scope.$on('main-films', function (event, val) {
        $scope.shared = val;

    })

    var start = function () {
        FilmSrv.getAll()
            .then(function (result) {
                $scope.all = true;
                $scope.films = result.data;
            })
            .catch(function (err) {
                console.log(err)
            })

        GenreSrv.getAll()
            .then(function (result) {
                $scope.all = true;
                $scope.generi = result.data;
                $scope.generi.unshift({ id: 0, name: 'Tutti i generi' })
                $scope.gen = $scope.generi[0].id;
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