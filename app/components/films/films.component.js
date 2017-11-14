angular.module('app').component('filmCard', {
    templateUrl: 'app/components/films/films.template.html',
    bindings: {
        film: '=',
        onUpdate: '&'
    },
    controller: 'filmComponentCtrl',
    controllerAs: 'mv'
});