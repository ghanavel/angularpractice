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


/*

Creating Objects
These are the two common ways to create objects:

1. Object Literals
The most common and, indeed, the easiest way to create objects is with the object literal described here

*/
// This is an empty object initialized using the object literal notation
var myBooks = {};

// This is an object with 4 items, again using object literal
var mango = {
color: "yellow",
shape: "round",
sweetness: 8,

howSweetAmI: function () {
console.log("Hmm Hmm Good");
}
}

/*
2. Object Constructor
  The second most common way to create objects is with Object constructor. 
  A constructor is a function used for initializing new objects, and you use the new keyword to call the constructor.
*/


var mango =  new Object ();
mango.color = "yellow";
mango.shape= "round";
mango.sweetness = 8;

mango.howSweetAmI = function () {
console.log("Hmm Hmm Good");
}





1. Constructor Pattern for Creating Objects
function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {

    this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.nativeToLand = theNativeToLand;

    this.showName = function () {
        console.log("This is a " + this.fruitName);
    }

    this.nativeTo = function () {
    this.nativeToLand.forEach(function (eachCountry)  {
       console.log("Grown in:" + eachCountry);
        });
    }


}

var mangoFruit = new Fruit ("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName(); // This is a Mango.
mangoFruit.nativeTo();
//Grown in:South America
// Grown in:Central America
// Grown in:West Africa

var pineappleFruit = new Fruit ("Brown", 5, "Pineapple", ["United States"]);
pineappleFruit.showName(); // This is a Pineapple.




// 2. Prototype Pattern for Creating Objects
function Fruit () {

}

Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";

Fruit.prototype.showName = function () {
console.log("This is a " + this.fruitName);
}

Fruit.prototype.nativeTo = function () {
            console.log("Grown in:" + this.nativeToLand);
}


/*

How to Access Properties on an Object
The two primary ways of accessing properties of an object are with dot notation and bracket notation.
*/
// 1. Dot Notation
// We have been using dot notation so far in the examples above, here is another example again:
var book = {title: "Ways to Go", pages: 280, bookMark1:"Page 20"};

// To access the properties of the book object with dot notation, you do this:
console.log ( book.title); // Ways to Go
console.log ( book.pages); // 280

// 2. Bracket Notation

// To access the properties of the book object with bracket notation, you do this:
console.log ( book["title"]); //Ways to Go
console.log ( book["pages"]); // 280

//Or, in case you have the property name in a variable:
var bookTitle = "title";
console.log ( book[bookTitle]); // Ways to Go
console.log (book["bookMark" + 1]); // Page 20

// Own and Inherited Properties
// Create a new school object with a property name schoolName
var school = {schoolName:"MIT"};

// Prints true because schoolName is an own property on the school object
console.log("schoolName" in school);  // true

// Prints false because we did not define a schoolType property on the school object, and neither did the object inherit a schoolType property from its prototype object Object.prototype.
console.log("schoolType" in school);  // false
 
// Prints true because the school object inherited the toString method from Object.prototype. 
console.log("toString" in school);  // true

/*
hasOwnProperty
To find out if an object has a specific property as one of its own property, you use the hasOwnProperty method.
This method is very useful because from time to time you need to enumerate an object and you want only the own properties, not the inherited ones.
*/
// Create a new school object with a property name schoolName
var school = {schoolName:"MIT"};

// Prints true because schoolName is an own property on the school object
console.log(school.hasOwnProperty ("schoolName"));  // true
 
// Prints false because the school object inherited the toString method from Object.prototype, therefore toString is not an own property of the school object.
console.log(school.hasOwnProperty ("toString"));  // false 


/*
Accessing and Enumerating Properties on Objects
To access the enumerable (own and inherited) properties on objects, you use the for/in loop or a general for loop.
*/

// Create a new school object with 3 own properties: schoolName, schoolAccredited, and schoolLocation.
var school = {schoolName:"MIT", schoolAccredited: true, schoolLocation:"Massachusetts"};

//Use of the for/in loop to access the properties in the school object
for (var eachItem in school) {
console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation

}

/*

Accessing Inherited Properties
Properties inherited from Object.prototype are not enumerable, so the for/in loop does not show them. 
However, inherited properties that are enumerable are revealed in the for/in loop iteration.
For example:

*/


 //Use of the for/in loop to access the properties in the school object
for (var eachItem in school) {
console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation

}

// Create a new HigherLearning function that the school object will inherit from.
/* SIDE NOTE: As Wilson (an astute reader) correctly pointed out in the comments below, the educationLevel property is not actually inherited by objects that use the HigherLearning constructor; instead, the educationLevel property is created as a new property on each object that uses the HigherLearning constructor. The reason the property is not inherited is because we use of the "this" keyword to define the property.
*/


function HigherLearning () {
this.educationLevel = "University";
}

// Implement inheritance with the HigherLearning constructor
var school = new HigherLearning ();
school.schoolName = "MIT";
school.schoolAccredited = true;
school.schoolLocation = "Massachusetts";


//Use of the for/in loop to access the properties in the school object
for (var eachItem in school) {
console.log(eachItem); // Prints educationLevel, schoolName, schoolAccredited, and schoolLocation
}


/*
In the last example, note the educationLevel property that was defined on the HigherLearning function is listed as
one of the school’s properties, even though educationLevel is not an own property—it was inherited.
*/


/*

Deleting Properties of an Object:
To delete a property from an object, you use the delete operator. 
You cannot delete properties that were inherited, nor can you delete properties with their attributes set to configurable.
You must delete the inherited properties on the prototype object (where the properties were defined).

Also, you cannot delete properties of the global object, which were declared with the var keyword.

The delete operator returns true if the delete was successful. And surprisingly, it also returns true if the property to delete was nonexistent or the property could not be deleted (such as non-configurable or not owned by the object).

These examples illustrate:

*/

var christmasList = {mike:"Book", jason:"sweater" }
delete christmasList.mike; // deletes the mike property

for (var people in christmasList) {
	console.log(people);
}
// Prints only jason
// The mike property was deleted

delete christmasList.toString; // returns true, but toString not deleted because it is an inherited method

// Here we call the toString method and it works just fine—wasn’t deleted 
christmasList.toString(); //"[object Object]"

// You can delete a property of an instance if the property is an own property of that instance. For example, we can delete the educationLevel property from the school's object we created above because the educationLevel property is defined on the instance: we used the "this" keyword to define the property when we declare the HigherLearning function. We did not define the educationLevel property on the HigherLearning function's prototype.

console.log(school.hasOwnProperty("educationLevel")); true
// educationLevel is an own property on school, so we can delete it
delete school.educationLevel; true 

// The educationLevel property was deleted from the school instance
console.log(school.educationLevel); undefined

// But the educationLevel property is still on the HigherLearning function
var newSchool = new HigherLearning ();
console.log(newSchool.educationLevel); // University

// If we had defined a property on the HigherLearning function's prototype, such as this educationLevel2 property:
HigherLearning.prototype.educationLevel2 = "University 2";

// Then the educationLevel2 property on the instances of HigherLearning would not be own property. 

// The educationLevel2 property is not an own property on the school instance
console.log(school.hasOwnProperty("educationLevel2")); false
console.log(school.educationLevel2); // University 2

// Let's try to delete the inherited educationLevel2 property
delete school.educationLevel2; true (always returns true, as noted earlier)

// The inherited educationLevel2 property was not deleted
console.log(school.educationLevel2); University 2

/*
Serialize and Deserialize Objects
To transfer your objects via HTTP or to otherwise convert it to a string, you will need to serialize it (convert it to a string); you can use the 
JSON.stringify function to serialize your objects. Note that prior to ECMAScript 5, you had to use a popular
 json2 library (by Douglas Crockford) to get the JSON.stringify function. It is now standardized in ECMAScript 5.

To Deserialize your object (convert it to an object from a string), you use the JSON.parse function from the same json2 
library. 
This function too has been standardized by ECMAScript 5.
*/

// JSON.stringify Examples:

var christmasList = {mike:"Book", jason:"sweater", chelsea:"iPad" }
JSON.stringify (christmasList);
// Prints this string:
// "{"mike":"Book","jason":"sweater","chels":"iPad"}"

// To print a stringified object with formatting, add "null" and "4" as parameters:
JSON.stringify (christmasList, null, 4);
// "{
    "mike": "Book",
    "jason": "sweater",
    "chels": "iPad"
}"

// JSON.parse Examples 
// The following is a JSON string, so we cannot access the properties with dot notation (like christmasListStr.mike)
var christmasListStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';

// Let’s convert it to an object
var christmasListObj = JSON.parse (christmasListStr); 

// Now that it is an object, we use dot notation
console.log(christmasListObj.mike); // Book

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
