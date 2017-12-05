angular.module('app').controller('newupdateCtrl', function (
    $scope,
    $state,
    film,
    FilmSrv) {
    // recupera film
    $scope.film = film.data;
    debugger;
  
});