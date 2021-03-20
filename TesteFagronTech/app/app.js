var app = angular
    .module('testeFagronTech', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngSanitize']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/lancarPontos', {
            templateUrl: 'pages/lancarPontos.html',
            controller: 'lancarPontosController'
        })

        .when('/verResultados', {
            templateUrl: 'pages/verResultados.html',
            controller: 'verResultadosController'
        });
});

