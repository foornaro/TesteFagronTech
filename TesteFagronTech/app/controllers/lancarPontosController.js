app.controller('lancarPontosController', function ($scope, $http, $mdDialog) {
    $scope.partida;
    $scope.maxDate = new Date().toISOString().split("T")[0];
    $scope.submit = function () {
        $http({
            method: 'POST',
            url: 'https://localhost:44326/api/Acompanhamento/AdicionarPontos',
            data: pontos = { "QuantidadePontos": $scope.partida.quantidadePontos, "DataPartida": moment($scope.partida.dataPartida).format()  }
        }).then(function successCallback(response) {

            if (response.data.Success) {
                alert = $mdDialog.alert({
                    title: 'Successo',
                    textContent: 'Partida salva com Successo',
                    ok: 'Ok'
                });
            } else {
                alert = $mdDialog.alert({
                    title: 'Erro',
                    htmlContent: 'Erro ao salvar <br/>' + response.data.Errors.join('<br/>'),
                    ok: 'Ok'
                });
            }
                $mdDialog
                    .show(alert)
                    .finally(function () {
                        alert = undefined;
                    });
        });
    };
});