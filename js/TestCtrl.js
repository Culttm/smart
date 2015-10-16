'use strict';

angular.module('app.TestCtrl', [])
	.controller('TestCtrl', ["$scope", "$window", "$location", "TestList",  function($scope, $window, $location, TestList){
	
        $scope.$on("answersInited", function() {}), 
		$scope.curQuestionNum = 0, 
		$scope.resultScore = 0, 
		$scope.resultNum = 0, 
        $scope.state = "waiting", 
        $scope.answercheck = 0, 
        $scope.lastCheckboxChNum = 0,
        $scope.questions = TestList.getList(),
        $scope.curQuestion = $scope.questions[$scope.curQuestionNum],
        $scope.results = TestList.getResults();



        // $scope.nextQuestion = function() {
        //     var s = $scope.lastCheckboxChNum;
        //     $scope.resultScore += Number($scope.questions[$scope.curQuestionNum].answers[s].score), 
        //     $scope.state = "waiting", 
        //     $scope.curQuestionNum >= $scope.questions.length - 1 ? $scope.getResult() : ($scope.curQuestionNum += 1, $scope.lastCheckboxChNum = 0, $scope.curQuestion = $scope.questions[$scope.curQuestionNum])
            
        //     if($scope.curQuestionNum >= $scope.questions.length){
        //         console.log($scope.questions.length)
        //     }

        // }; 

        // $scope.getResult = function() {
        //     // $location.path($scope.resultScore)
        // };

        // $scope.enableNext = function(s) {
        //     $scope.lastCheckboxChNum = s, 
        //     $scope.state = "answered"
        // };



        // $scope.resultScore = $scope.resultScore;
        // // ($scope.resultScore < 0 || $scope.resultScore > 100) && $location.path("/test");
        // $scope.results = TestList.getResults();
        // $scope.resultNum = $scope.resultScore >= 24 ? 0 : $scope.resultScore < 24 && $scope.resultScore >= 12 ? 1 : 2;
        // $scope.resultNumLink = defs.siteUrl + '/share/result_' + $scope.resultNum + '.html';

	}]);