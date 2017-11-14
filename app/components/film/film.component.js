angular.module('app').component('filmDettaglio', {
    templateUrl: 'app/components/film/film.template.html',
    bindings: {
        film: '='
    },
    controllerAs: 'mv'
})