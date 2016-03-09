/* Sample Controller */

app.controller('myFirstController', ['$scope', function($scope) {
  console.log("hello??")
	$scope.myFirstVariable = "UHH"



}]);

app.controller('listController', ['$scope',  '$http', '$routeParams', function($scope, $http, $routeParams) {
  console.log("hello2??")
	$scope.myFirstVariable = "THIS IS A TEST OF ANGULAR"

	$http.get('./data/imdb250.json').
  success(function(data) {
  	
  	var films = angular.fromJson(data)
  	$scope.films = films
  	console.log(films[0])
  }).
  error(function(err) {
  });
}]);

app.controller('galleryController', ['$scope',  '$http', '$routeParams', function($scope, $http, $routeParams) {
  console.log("hello3??")
	$scope.myFirstVariable = "THIS IS A TEST OF ANGULAR"

}]);

app.controller('detailsController', ['$scope',function($scope) {
  $scope.predicate = 'rank';

}]);

