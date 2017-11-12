
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
                templateUrl: 'app/routes/home.template.html',
            })
            .state('films', {
                url: '/films',
                templateUrl: 'app/routes/film/films.template.html',
                controller: 'filmCtrl',
            })
            .state('film', {
                url: '/film/{id}',
                templateUrl: 'app/routes/film/film.template.html',
                controller: function ($rootScope, $scope, film) {
                    $scope.film = film.data;
                    $rootScope.$on('$stateChangeStart', 
                    function(event, toState, toParams, fromState, fromParams, options){ debugger;})
                },
                onEnter: function () {
                    console.log("ciao");
                },
                resolve: {
                    film: function (FilmSrv, $stateParams) {
                        return FilmSrv.getOne($stateParams.id);
                    }
                }
            })
    });