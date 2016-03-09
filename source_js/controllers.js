/* Sample Controller */

app.controller('myFirstController', ['$scope', function($scope) {


}]);

app.controller('listController', ['$scope',  '$http', '$routeParams', function($scope, $http, $routeParams) {


	$http.get('./data/imdb250.json').
  success(function(data) {
  	
  	var films = angular.fromJson(data)
  	$scope.films = films
  	console.log(films[0])
  }).
  error(function(err) {
  });
}]);

app.controller('galleryController', ['$scope',  '$http', function($scope, $http) {
  
	var genres = ["Action", "Adventure","Animation","Biography","Comedy",
	"Crime", "Drama", "Family", "Fantasy", "Film-Noir", "History", "Horror", 
	"Music", "Musical", "Mystery", "Romance", "Sci-Fi", "Sport", "Thriller", "War", "Western"];
	console.log(genres)
	$scope.genres = genres

  console.log("hello3??")
	$http.get('./data/imdb250.json').
  success(function(data) {
  	
  	var films = angular.fromJson(data)
  	$scope.films = films
  	console.log(films[0])
  }).
  error(function(err) {
  });

  $scope.filterGenres = function(genreName)
  {
  	console.log(genreName);
  	$scope.predicate = genreName;
  }

}]);

app.controller('detailsController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	console.log('sup')
	var id = $routeParams.id
	if(id == 0)
		id = 240;
	else if(id == 241)
		id = 1;

	$http.get('./data/imdb250.json').
	success(function(data) {	
  	var films = angular.fromJson(data)
  	$scope.film = films[id - 1];
  	console.log(films[0])
  }).
  error(function(err) {
  });
  
}]);

