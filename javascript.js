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

	$scope.delete = function(index) {
		$scope.quotes.splice(index, 1)
	}
		



}

angular.module('myApp').controller('mainController', ['$scope', mainControllerFunc])

// User can click on the author of a quote to go to a separate page/sceeen that shows all quotes from that person.
// Make a 'Random Quote' button that selects a quote at random and displays it in a popup (not an alert).
// The user should be given the option to undo their last action.