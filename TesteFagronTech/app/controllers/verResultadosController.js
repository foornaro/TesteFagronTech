app.controller('verResultadosController', function ($scope, $http) {
    
    $http({
        method: 'GET',
        url: 'https://localhost:44326/api/Acompanhamento/VerResultados'
    }).then(function successCallback(response) {
        $scope.resultados = response.data.Content;
        $scope.errors = response.data.Errors;
        $scope.Success = response.data.Success;
    });
});