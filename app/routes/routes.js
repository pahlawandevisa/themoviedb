
angular.module('app')
    .config(function (
        $stateProvider,
        $urlRouterProvider,
        $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/home');
        $urlRouterProvider.when('', '/home');
        $stateProvider
            .state('home', {
                url: '/home',
                template: 'todo',
            })
            .state('films', {
                url: '/films',
                templateUrl: 'app/resource/films/films.template.html',
                controller: 'filmsCtrl',
            })
            .state('film', {
                url: '/film/{id}',
                templateUrl: 'app/resource/films/film.template.html',
                controller: 'filmCtrl',
                onEnter: function () {
                },
                resolve: {
                    film: function (FilmSrv, $stateParams) {
                        return FilmSrv.getOne($stateParams.id);
                    }
                }
            })
    });