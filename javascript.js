angular.module('myApp', [])
var mainControllerFunc = function($scope) {
	$scope.greeting = 'hi'
	$scope.quotes = []
	

	$scope.submit = function() {
		var eachQuote = {}
		eachQuote.text = $scope.text || "no text"
		eachQuote.author = $scope.author || "anonymous"
		$scope.quotes.push(eachQuote)
		$scope.text = ""
		$scope.author = ""
	}

	$scope.rate = function() {
		var ratings = []
		ratings.push($scope.rating)
		console.log(ratings)
	}



}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])