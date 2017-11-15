angular.module('app').controller('filmCtrl', function (film) {
    
    this.film = film.data;
});