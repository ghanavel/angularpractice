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


-----------------------------------------------------------------------------------------------------------------------
var ageGroup = {30: "Children", 100:"Very Old"};
console.log(ageGroup.30) // This will throw an error
// This is how you will access the value of the property 30, to get value "Children"
console.log(ageGroup["30"]); // Children
//It is best to avoid using numbers as property names.



// Reference Data Type and Primitive Data Types

/*
One of the main differences between reference data type and primitive data types 
is reference data type’s value is stored as a reference, it is not stored directly on the variable, 
as a value, as the primitive data types are. For example:
*/


// The primitive data type String is stored as a value
var person = "Kobe";  
var anotherPerson = person; // anotherPerson = the value of person
person = "Bryant"; // value of person changed

console.log(anotherPerson); // Kobe
console.log(person); // Bryant

/*
It is worth noting that even though we changed person to “Bryant,” the anotherPerson variable still 
retains the value that person had.
*/


// Compare the primitive data saved-as-value demonstrated above with the save-as-reference for objects:
var person = {name: "Kobe"};
var anotherPerson = person;
person.name = "Bryant";

console.log(anotherPerson.name); // Bryant
console.log(person.name); // Bryant

/*
In this example, we copied the person object to anotherPerson, but because the value in person was stored as
 a reference and not an actual value, when we changed the person.name property to “Bryant” the anotherPerson 
reflected the change because it never stored an actual copy of it’s own value of the person’s properties, 
it only had a reference to it.
*/


/*
Object Data Properties Have Attributes
Each data property (object property that store data) has not only the name-value pair, but also 3 attributes (the three attributes are set to true by default):
— Configurable Attribute: Specifies whether the property can be deleted or changed.
— Enumerable: Specifies whether the property can be returned in a for/in loop.
— Writable: Specifies whether the property can be changed.


*/


(function test() { 
	var test = 123; 
	console.log( test ); //123
}())


(function test() { 
        test = 123; 
	console.log( test ); 
}())

// Output:  
function test() { 
        test = 123; 
	console.log( test ); 
} 

x += 20;
y = 10
conssole.log(x+y); // ReferenceError: x is not defined

// global variable test1
var x = 10;

function test(){
x=15;
console.log(x);
}

test();
console.log(x);
console.log(this.x);
console.log(window.x);


// global variable test2
x = 10;

function test(){
x=15;
console.log(x);
}

test();
console.log(x);


// global variable test3
x = 10;

function test(){
var x=15;
console.log(x);
}

test();
console.log(x);

var name = "Richard";
// the blocks in this if statement do not create a local context for the name variable
if (name) {
	var name = "Jack"; // this name is the global name variable and it is being changed to "Jack" here
	console.log (name); // Jack: still the global variable
}

// Here, the name variable is the same global name variable, but it was changed in the if statement
console.log (name); // Jack

// curly bracket wrapper
var firstName = "Richard";
{
var firstName = "Bob";
}

// To reiterate: JavaScript does not have block-level scope

// The second declaration of firstName simply re-declares and overwrites the first one
console.log (firstName); // Bob




// Another example

for (var i = 1; i <= 10; i++) {
	console.log (i); // outputs 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
};

// The variable i is a global variable and it is accessible in the following function with the last value it was assigned above 
function aNumber () {
console.log(i);
}

// The variable i in the aNumber function below is the global variable i that was changed in the for loop above. Its last value was 11, set just before the for loop exited:
aNumber ();  // 11



// setTimeout Variables are Executed in the Global Scope
// The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj

var highValue = 200;
var constantVal = 2;
var myObj = {
	highValue: 20,
	constantVal: 5,
	calculateIt: function () {
 setTimeout (function  () {
	console.log(this.constantVal * this.highValue);
}, 2000);
	}
}

// The "this" object in the setTimeout function used the global highValue and constantVal variables, because the reference to "this" in the setTimeout function refers to the global window object, not to the myObj object as we might expect.

myObj.calculateIt(); // 400
// This is an important point to remember.


// setTimeout Variables are Executed in the Global Scope
// The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj

var highValue = 200;
var constantVal = 2;
var myObj = {
	highValue: 20,
	constantVal: 5,
	calculateIt: function () {
 setTimeout (function  () {
	console.log(myObj.constantVal * myObj.highValue);
}, 2000);
	}
}



// Both the variable and the function are named myName
var myName;
function myName () {
console.log ("Rich");
}

// The function declaration overrides the variable name
console.log(typeof myName); // function



 // But in this example, the variable assignment overrides the function declaration
var myName = "Richard"; // This is the variable assignment (initialization) that overrides the function declaration.

function myName () {
console.log ("Rich");
}

console.log(typeof myName); // string 



// It is important to note that function expressions, such as the example below, are not hoisted
var myName = function () {
console.log ("Rich");
}





-------------------------------------------------------------------------------------------------------------------------
