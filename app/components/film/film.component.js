angular.module('app').component('filmDetail', {
    templateUrl: 'app/components/film/film.template.html',
    bindings: {
        film: '='
    },
    controllerAs: 'mv'
})