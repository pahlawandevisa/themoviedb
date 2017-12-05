angular.module('app').controller('filmCtrl', function (
    $scope,
    $state,
    film,
    FilmSrv) {
    // recupera film
    $scope.film = film.data;
    
    // elimina film
    $scope.elimina = function () { 
        FilmSrv.remove($scope.film._id)
        .then(() => { 
            $state.go('films')
        })
        .catch();
    }
    
    // modifica film
    $scope.modifica = function () {  
        $state.go('creamodifica', {'id':$scope.film._id})
    }
});