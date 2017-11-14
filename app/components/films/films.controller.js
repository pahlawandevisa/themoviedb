angular.module('app').controller('cardCtrl', function (FilmSrv) {

    this.style = {
        width: '150px',
        height: '214px',

    }
    this.$onInit = function () {
        this.film.title = this.film.title.toUpperCase();
    }
    this.change = function () {
        this.film.title = this.film.title.split("").reverse().join("");
        this.onUpdate();
    }
})