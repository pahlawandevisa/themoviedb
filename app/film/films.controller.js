angular.module('app').controller('filmCtrl', function (
    $rootScope,
    $scope,
    toastr,
    FilmSrv,
    GenreSrv,
) {
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

    start();


})