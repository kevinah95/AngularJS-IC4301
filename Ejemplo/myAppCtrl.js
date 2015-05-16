var app = angular.module('MyApp', []);
app.controller('preguntasController', function($scope){
   //objeto pregunta
   $scope.pregunta = {
      id: 1,
      premisa: '¿Qué tipo de mascota preferiría?',
      respuestas: [
         {
            id: 1,
            text: 'Perro',
            active: 'false'
         },
         {
            id: 2,
            text: 'Gato',
            active: 'false'
         },
         {
            id: 3,
            text: 'Conejo',
            active: 'false'
         },
         
      ]
   }

   $scope.marcar = function(){
	   angular.forEach($scope.pregunta.respuestas, function(value, key) {
	      value.active = false;
	   });
	   this.respuesta.active = true;
	}

	$scope.respuestas = [];

    $scope.responder = function(){
      angular.forEach($scope.pregunta.respuestas, function(respuesta, i) {
         if (respuesta.active)
            $scope.respuestas.push({ id:$scope.id, key:respuesta.id });
      });
    };

});


