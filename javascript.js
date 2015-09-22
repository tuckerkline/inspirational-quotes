var app = angular.module('myApp', [])
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

	$scope.delete = function(index) {
		$scope.quotes.splice(index, 1)
	}

	$scope.shown = false
	$scope.show = function() {
		$scope.shown = true
		$scope.showRandom()
	}
	$scope.showRandom = function() {
	 	$scope.randomQuote = []
		var rand = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
		$scope.randomQuote.push(rand)
		
	 }
	 $scope.close = function() {
	 	$scope.shown = false
	 }

	 $scope.authorShow = false
	 $scope.showAuthor = function(index) {
	 	$scope.authorShow = true

	 	$scope.selectedAuthorQuotes = []
	 	var author = $scope.quotes[index].author
	 	for (var i = 0; i < $scope.quotes.length; i++) {
	 		if ($scope.quotes[i].author == author) {
	 			$scope.selectedAuthorQuotes.push($scope.quotes[i])
	 		}
	 	}
	 	// console.log($scope.selectedAuthorQuotes)
	 	// console.log(author)
	 	// $scope.selectedAuthor.push()
	 }

}




angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])



// User can click on the author of a quote to go to a separate page/sceeen that shows all quotes from that person.
// Make a 'Random Quote' button that selects a quote at random and displays it in a popup (not an alert).
// The user should be given the option to undo their last action.