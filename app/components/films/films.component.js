angular.module('app').component('filmCard', {
    templateUrl: 'app/components/films/films.template.html',
    bindings: {
        film: '=',
        onUpdate: '&'
    },
    controller: 'cardCtrl',
    controllerAs: 'mv'
});