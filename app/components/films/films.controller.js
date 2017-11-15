angular.module('app').controller('filmComponentCtrl', function (FilmSrv, $timeout, $scope) {
    var vm = this;
    vm.style = {
        width: '150px',
        height: '214px',

    }
    vm.$onInit = function () {
        vm.film.title = vm.film.title.toUpperCase();
    }
    vm.change = function () {
        vm.film.title = vm.film.title.split("").reverse().join("");
        vm.onUpdate();
    }
})