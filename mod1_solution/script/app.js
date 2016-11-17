(function() {

    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$sce'];

    function LunchCheckController($scope, $sce) {
        $scope.lunchItems = "";
        $scope.msg="";
        $scope.enviaLista = function(lunchItems) {

          // Regex que pega , ou ; como separador
          var lista = lunchItems.split(/,|;|:|-/);

          // Remove espaços antes e depois dos itens
          var trimmedList = [];
          lista.forEach(function (element) {
            trimmedList.push(element.trim());
          });
          // remove os itens vaizos da array
          trimmedList = trimmedList.filter(Boolean);

          if (trimmedList.length == 0){
              $scope.msg = "Please enter data first";
              $scope.lunchItems = "";
          } else if (trimmedList.length > 0 && trimmedList.length <= 3){
              $scope.msg = "Enjoy!!";
              enviaHtml(trimmedList);
          } else {
            $scope.msg = "Too much!";
            enviaHtml(trimmedList);
          }



        }; // fim da função enviaLista

        function enviaHtml(listaItens) {

          $scope.html = "<p>----- optional -- just to practice --------     :)    ----</p>"
          $scope.html += "<h2>Your real list!! (all trimmed!!)</h2>"
          $scope.html += "<ul class='list-group'>";

          for (var i=0; i<listaItens.length; i++){
            $scope.html += "<li class='list-group-item'>";
            $scope.html += "(" + (i+1) + ")" + " " + listaItens[i];
            $scope.html += "</li>";
          }
          $scope.html += "</ul>";
          $scope.teste = $sce.trustAsHtml($scope.html);
        }




    }; // Fim da função LunchCheckController

})();
