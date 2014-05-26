var app = angular.module("app",['ngRoute','checklist-model']);

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

app.controller("UserController",function($scope,$http,$routeParams,$location,userService,UserStorage){
	console.log($routeParams);	

	/*
	$scope.customers = [
            { name: 'Dave Jones', city: 'Phoenix' },
            { name: 'Jamie Riley', city: 'Atlanta' },
            { name: 'Heedy Wahlin', city: 'Chandler' },
            { name: 'Thomas Winter', city: 'Seattle' }
        ];
	*/
	var users = $scope.users = UserStorage.get();

	console.log(UserStorage.get());
	//console.log(UserStorage.put());


  $scope.countryList = [
    {name:'India'},
    {name:'Pakistan'},
    {name:'Sri Lanka'},
   
  ];


  $scope.sportsList = [
    {name:'Cricket'},
    {name:'Foot ball'},
    {name:'Volley ball'},
   
  ];



  $scope.educationList = [
    'guest', 
    'user', 
    'customer', 
    'admin'
  ];

  	$scope.master = {};

	$scope.reset = function() {
	  $scope.user = angular.copy($scope.master);
	};

	$scope.isUnchanged = function(user) {
	  return angular.equals(user, $scope.master);
	};

	$scope.$watch('users', function(newValue,oldValue){
		if(newValue != oldValue){
			UserStorage.put(users);
		}
	},true);

	$scope.addUser = function(user){
		//console.log("added user");
		//console.log(user);
		user['id'] = users.length+1;
		//console.log(user);
		users.push(user);
		$location.path("/");
	};

	$scope.updateUser = function(editUser){
		console.log("update");
		console.log(editUser);
		users.splice(users.indexOf(users[editUser.id - 1]), 1);
		$scope.addUser(editUser);
	};

	$scope.deletUser = function (id) {
		users.splice(users.indexOf(users[id-1]), 1);
		$location.path("/");
	};


	$scope.getUser = function () {
		//$scope.user =  $scope.users[$routeParams.id - 1];
		$scope.editUser =  $scope.users[$routeParams.id - 1];
		
		//console.log($scope.editUser);
	};

	$scope.getUser();
	$scope.reset();




		/*

	$http.get("/js/myjson.json").success(function(data){
						$scope.users = data;

	});
	*/

//	 console.log($scope.users);

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