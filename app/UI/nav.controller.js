angular.module('app').controller('navCtrl', function (
    $rootScope,
    $scope,
    FilmSrv,
) {
    $scope.set = function () {
        // rootscope
        // $rootScope.shared = $scope.search;

        // observer
        // FilmSrv.setShared($scope.search);

        // $emit
        $scope.$emit('nav-main', $scope.search);
    }

})