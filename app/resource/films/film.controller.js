angular.module('app').controller('filmCtrl',function ($scope, film) {
    $scope.film = film.data;
});