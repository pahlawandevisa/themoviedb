angular.module('app').controller('navCtrl', function (
    $rootScope,
    $scope,
    FilmSrv,
    $state,
) {
    $scope.set = function () {
        FilmSrv.setShared($scope.search);
    }

    $scope.stato = $state.current.name == 'films';

})