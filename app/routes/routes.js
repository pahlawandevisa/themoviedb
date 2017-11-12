
angular.module('app')
    .config(function (
        $stateProvider,
        $urlRouterProvider,
        $locationProvider) {
        debugger;
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/', {
                url: '/',
                template: '<h1>ciaoooone</h1>'
            });
    });