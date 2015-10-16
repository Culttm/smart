'use strict';

angular.module('app.ResultCtrl', [])
	.controller('ResultCtrl', ["$scope", "$routeParams", "$location", "TestList", function($scope, $routeParams, $location, TestList){

	    $scope.resultScore = $routeParams.balls || 0;
	    ($scope.resultScore < 0 || $scope.resultScore > 100) && $location.path("/test");
	    $scope.results = TestList.getResults();
	    $scope.resultNum = $scope.resultScore >= 24 ? 0 : $scope.resultScore < 24 && $scope.resultScore >= 12 ? 1 : 2;
	    $scope.resultNumLink = defs.siteUrl + '/share/result_' + $scope.resultNum + '.html';


	}]);