angular.module('app').component('filmCard', {
    templateUrl: 'app/film/card.template.html',
    bindings: {
        film: '='
    },
    controller: 'cardCtrl',
    controllerAs: 'mv'
})