
angular.module('app')
    .config(function (
        $stateProvider,
        $urlRouterProvider,
        $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/films');
        $urlRouterProvider.when('', '/films');
        $stateProvider
            .state('home', {
                url: '/home',
                template: 'todo',
            })
            .state('films', {
                url: '/films',
                views: {
                    'nav': {
                        templateUrl: 'app/UI/nav.template.html',
                        controller: 'navCtrl'
                    },
                    'container': {
                        templateUrl: 'app/resource/films/films.template.html',
                        controller: 'filmsCtrl',
                    },
                },
            })
            .state('film', {
                url: '/film/{id:[0-9a-f]{24}}',
                resolve: {
                    film: function (FilmSrv, $stateParams) {
                        return FilmSrv.getOne($stateParams.id);
                    }
                },
                views: {
                    'nav': {
                        templateUrl: 'app/UI/nav.template.html',
                        controller: 'navCtrl'
                    },
                    'container': {
                        templateUrl: 'app/resource/films/film.template.html',
                        controller: 'filmCtrl',
                        onEnter: function () {
                        },

                    },
                },

            })
            .state('creamodifica', {
                url: '/film/update/{id:[0-9a-f]{24}}',
                resolve: {
                    film: function (FilmSrv, $stateParams) {
                        if (!$stateParams.id) return null;
                        return FilmSrv.getOne($stateParams.id);
                    }
                },
                views: {
                    'nav': {
                        templateUrl: 'app/UI/nav.template.html',
                        controller: 'navCtrl'
                    },
                    'container': {
                        templateUrl: 'app/resource/films/newupdatefilm.template.html',
                        controller: 'newupdateCtrl',
                        onEnter: function () {
                        },

                    },
                },

            })
    });