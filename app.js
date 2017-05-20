var app=angular.module("myApp",['ngResource'])
app.controller("myController",["$scope","$resource",function($scope,$resource){
	$scope.message="Hello.........";

	/*$scope.getWeatherDetails=function(){
	$http.get("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1")
	.then(function(response){
		//console.log(response.data);
	})

	}
	$scope.cords=response;*/
	$scope.getWeatherDetails=function(){
	$resource("https://jsonplaceholder.typicode.com/posts/1")
	.get(function(data){
		console.log(data)
	})
/*	.success(function(response){
		console.log(response.data);
		$scope.message=response.data.userId;
	})*/


	}
}])