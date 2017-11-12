angular.module('app').controller('navCtrl', function (
    $rootScope,
    $scope,
    FilmSrv,
) {
    $scope.set = function () {
        // observer
        FilmSrv.setShared($scope.search);
    }

})