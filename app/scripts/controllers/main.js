'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
	.controller('MainCtrl', ['$scope', '$http','localStorageService', function ($scope,$http,$localStorageService) {
	
	$scope.importarTareas= function(){
		$http.get('tareas.json').then(successCallback, errorCallback);
		function successCallback(response){
			$scope.tareas=response.data;
		}
		function errorCallback(error){
			$scope.tareas="Error";
		}
	};

	$scope.importarCompletas=function(){
		$http.get('completas.json').then(successCallback, errorCallback);
		function successCallback(response){
			$scope.completas=response.data;
		}
		function errorCallback(error){
			$scope.completas="Error";
		}
	}

	$scope.importarTareas();
	$scope.importarCompletas();

		$scope.formVisibility=false;
		$scope.addTarea=function(){
			if($scope.tarea != ""){
				$scope.tareas.push({Tarea:$scope.tarea, completo:false});
				$scope.tarea='';
				$scope.formVisibility=true;	
			}else{
				alert("Debes Ingresar una Tarea :)");
			}
			
		}

		$scope.eliminarTarea=function(index){
			$scope.tareas.splice(index, 1);
		};

		$scope.Completar=function(index){
			$scope.aux=$scope.tareas.splice(index,1);
			$scope.completas.push({Tarea:$scope.aux[0].Tarea, completo:true});
		}

		$scope.eliminarCompletas=function(index){
			$scope.completas.splice(index,1);
		}

		$scope.Reactivar=function(index){
			$scope.aux=$scope.completas.splice(index,1);
			$scope.tareas.push({Tarea:$scope.aux[0].Tarea, completo:false});
		}


}]);
