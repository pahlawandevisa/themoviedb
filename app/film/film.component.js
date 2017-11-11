angular.module('app').component('filmDetail', {
    templateUrl: 'app/film/film.template.html',
    bindings: {
        film: '='
    },
    controllerAs: 'mv'
})