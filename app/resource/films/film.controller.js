angular.module('app').controller('filmCtrl', function (
    $scope,
    $state,
    film,
    FilmSrv) {
    $scope.film = film.data;
    $scope.elimina = function () { 
        FilmSrv.remove($scope.film._id)
            .then(() => { 
                $state.go('films')
            })
            .catch();
    }
});