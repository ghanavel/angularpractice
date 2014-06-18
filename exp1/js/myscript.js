var app = angular.module("app",['ngRoute']);

app.config(function($routeProvider){
	//$locationProvider.html5Mode(false);
	$routeProvider
	.when('/',{
			templateUrl:"view/userDetails.html",
			controller:"UserController"
		})
	.when('/add',{
		templateUrl:"view/add.html",
		controller:"UserController"
	})

	.when('/edit/:id',{
		templateUrl:"view/edit.html",
		controller:"UserController"
	})
	.when('/delete/:id',{
		templateUrl:"view/delete.html",
		controller:"UserController"
	})
	.otherwise({redirectTo:'/'})
	;
	

});

app.controller("UserController",function($scope,$http,$routeParams,$location,userService){
	//console.log($routeParams);	

	/*
	$scope.customers = [
            { name: 'Dave Jones', city: 'Phoenix' },
            { name: 'Jamie Riley', city: 'Atlanta' },
            { name: 'Heedy Wahlin', city: 'Chandler' },
            { name: 'Thomas Winter', city: 'Seattle' }
        ];
	*/





	$http.get("/js/myjson.json").success(function(data){
						$scope.users = data;

				});

	 console.log($scope.users);

      $scope.save = function(){
      	console.log($scope.user);
		$http.post('process.php', $scope.user)
				.success(function(data) {
					alert("hai");
				});


			$location.path("/");	
      }

	$scope.delete = function(){
		alert("hai");
		$location.path("/");
	}


});


app.factory("userService",function($http){
	return {
		getUser: function(){

			return	$http.get("/js/myjson.json").success(function(data){
						return	data;

				});

		}
	}

});


