'use strict';

/* Controllers */

/*angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);*/

function WeatherCtrl($scope, $http) {


 
	$scope.update = function(weather) {
	    var master = angular.copy(weather);

	    $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=' + master.location + '&callback=JSON_CALLBACK').success(function(json) {
        console.log(json);
      	$scope.weather = json;
 	});

	};
	 
	$scope.reset = function() {
	    $scope.weather = angular.copy($scope.master);
	};
	 
	$scope.reset();
  





  $scope.hello = "Hello, World!"

}

