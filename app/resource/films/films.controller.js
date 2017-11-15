angular.module('app').controller('filmsCtrl', function ($scope, films) {
    $scope.films = films.data;
})