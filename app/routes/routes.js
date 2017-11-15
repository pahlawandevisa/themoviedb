
angular.module('app')
    .config(function (
        $stateProvider,
        $urlRouterProvider,
        $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/', {
                url: '/',
                views: {
                    'menu': {
                        template:'il mio bel menu'
                    },
                    'contenuto': {
                        template: 'il mio bel contenuto'
                    },
                }
            });
    });