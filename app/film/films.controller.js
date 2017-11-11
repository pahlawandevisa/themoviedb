angular.module('app').controller('filmCtrl', function (
    $scope,
    toastr,
    FilmSrv,
) {
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
                toastr.success('Ottima scelta!!',$scope.film.title);
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    $scope.start = function () {
        start();
    }
    start();
})