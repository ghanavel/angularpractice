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


------------------------------------------------------------------------------------------------------------------------
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
OP:
 "{
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


/*
What is a closure?
A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. 
The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), 
it has access to the outer function’s variables, and it has access to the global variables.

The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. 
Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.
You create a closure by adding a function inside another function.
A Basic Example of Closures in JavaScript:

*/

function showName (firstName, lastName) {
var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter
function makeFullName () {
return nameIntro + firstName + " " + lastName;
}

return makeFullName ();
}

showName ("Michael", "Jackson"); // Your name is Michael Jackson

/*

Closures’ Rules and Side Effects
1. Closures have access to the outer function’s variable even after the outer function returns:
One of the most important and ticklish features with closures is that the inner function still has access to the outer function’s variables
even after the outer function has returned. Yep, you read that correctly. When functions in JavaScript execute, they use the same scope chain that was
in effect when they were created. This means that even after the outer function has returned, the inner function still has access to the outer function’s
variables. 
Therefore, you can call the inner function later in your program. This example demonstrates:

*/

function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.

// The closure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
mjName ("Jackson"); // This celebrity is Michael Jackson


/*
Closures store references to the outer function’s variables; they do not store the actual value. Closures get more interesting when the value
of the outer function’s variable changes before the closure is called. And this powerful feature can be harnessed in creative ways, such as this
private variables example first demonstrated by Douglas Crockford:
*/


function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable
            // It will return the current value of celebrityID, even after the changeTheID function changes it
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    }

}

var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.
mjID.getID(); // 999
mjID.setID(567); // Changes the outer function's variable
mjID.getID(); // 567: It returns the updated celebrityId variable

/*
Closures Gone Awry:
Because closures have access to the updated values of the outer function’s variables, they can also lead to bugs when the outer function’s variable 
changes with a for loop. Thus:
*/

// This example is explained in detail below (just after this code box).
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }
    
    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0]; 
console.log(stalloneID.id()); // 103

/*

n the preceding example, by the time the anonymous functions are called, the value of i is 3 (the length of the array and then it increments). 
The number 3 was added to the uniqueID to create 103 for ALL the celebritiesID. So every position in the returned array get id = 103, instead of the
intended 100, 101, 102.

The reason this happened was because, as we have discussed in the previous example, the closure (the anonymous function in this example) has access to 
the outer function’s variables by reference, not by value. So just as the previous example showed that we can access the updated variable with the closure, 
this example similarly accessed the i variable when it was changed, since the outer function runs the entire for loop and returns the last value of i, which is 103.

To fix this side effect (bug) in closures, you can use an Immediately Invoked Function Expression (IIFE), such as the following:
*/

function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
            return function () {
                return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
            } () // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.
        } (i); // immediately invoke the function passing the i variable as a parameter
    }

    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id); // 100

var cruiseID = createIdForActionCelebs [1];
console.log(cruiseID.id); // 101

// 12 Simple (Yet Powerful) JavaScript Tips

/*
1. Powerful JavaScript Idiomatic Expressions With && and ||
You see these idiomatic expressions in JavaScript frameworks and libraries. Let’s start off with a couple of basic examples:

Example 1: Basic “short circuting” with || (Logical OR)
To set default values, instead of this:
*/

function documentTitle(theTitle)
if (!theTitle) {
  theTitle  = "Untitled Document";
  }
}


// Use this:
function documentTitle(theTitle)
  theTitle  = theTitle || "Untitled Document";
}


/*
Explanation:
— First, read the “Important Note” box below for a refresher on JavaScript’s Falsy and Truthy values
— The || operator first evaluates the expression on the left, if it is truthy, it returns that value. 
  If it is falsy, it evaluates and returns the value of the right operand (the expression on the right).
— If theTitle variable is falsy, the expression on the right will be returned and assigned to the variable. 
  On the other hand, if theTitle is truthy, its value will be returned and assigned to the variable.

JavaScript Falsy Values: null, false, 0 undefined, NaN, and “” (this last item is an empty string).
— Note that Infinity, which is a special number like NaN, is truthy; it is not falsy, while NaN is falsy.
JavaScript Truthy Values: Anything other than the falsy values.

Example 2: Basic short circuting with && (Logical AND)
Instead of this:

*/


function isAdult(age) {
  if (age && age > 17) {
  return true;
}
else {
  return false;
  }
}
Use this:

function isAdult(age) {
   return age && age > 17 ;
}



/*

Explanation:
— The && operator first evaluates the expression on the left. If it is falsy, false is returned; 
   it does not bother to evaluate the right operand.
— If the the first expression is truthy, also evaluate the right operand (the expression on the right) and return the result.

Example 3:
Instead of this:

*/


if (userName) {
  logIn (userName);
}
 else {
   signUp ();
}

// Use this:

 userName && logIn (userName) || signUp ();

/*

Explanation:
— If userName is truthy, then call the logIn function with userName as the parameter.
— If userName is falsy, call the signUp function

Example 4:
Instead of this:
*/


var userID;
if (userName && userName.loggedIn) {
  userID = userName.id;
}
else {
  userID = null;
}

// Use this:
var userID = userName && userName.loggedIn && userName.id
/*
Explanation:
— If userName is truthy, call userName.loggedIn and check if it is truthy; if it is truthy, then get the id from userName.
— If userName is falsy, return null.

*/
// 2. Powerful Uses of Immediately Invoked Function Expressions

/*
IFE (pronounced “Iffy”) is an abbreviation for Immediately Invoked Function Expression, and the syntax looks like this:
It is an anonymous function expression that is immediately invoked, and it has some particularly important uses in JavaScript.

*/

(function () {
 // Do fun stuff
 }
)()


// How Immediately Invoked Function Expressions Work?
/*
The pair of parenthesis surrounding the anonymous function turns the anonymous function into a function expression or variable expression.
So instead of a simple anonymous function in the global scope, or wherever it was defined, we now have an unnamed function expression.
It is as if we have this:
*/

//Similarly, we can even create a named, immediately invoked function expression:

(showName = function (name) {console.log(name || "No Name")}) (); // No Name

showName ("Rich"); // Rich
showName (); // No Name

/*

— Note that you cannot use the var keyword inside the opening pair of parentheses (you will get a syntax error), but it is not necessary in this context 
  to use var since any variable declared without the var keyword will be a global variable anyway.
— We were able to call this named function expression both immediately and later because it has a name.
— But we can’t call the anonymous function expression later, since there is no way to refer to it. 
This is the reason it is only useful when it is immediately invoked.

By placing the anonymous function in parentheses (a group context), the entire group is evaluated and the value returned. 
The returned value is actually the entire anonymous function itself, so all we have to do is add two parentheses after it to invoke it.


Therefore, the last two parentheses tell the JS compiler to invoke (call) this anonymous function immediately, hence the name
 “Immediately Invoked Function Expression.” 

Because JavaScript has function-level scope, all the variables declared in this 
anonymous function are local variables and therefore cannot be accessed outside the anonymous function.

 So we now have a powerful piece of anonymous code inside an unnamed function expression, and the code is meaningless unless we invoke the anonymous function, because nothing can access the code.
 It is the immediate invocation of the anonymous function that makes it powerful and useful.

You can pass parameters to the anonymous function, just like you would any function, including variables. The anonymous function’s scope extend 
into any outer function that contains it and to the global scope. Read my article, JavaScript Variable Scope and Hoisting Explained, for more.

When To Use Immediately Invoked Function Expressions?
1. To Avoid Polluting the Global Scope The most popular use of the IIFE is to avoid declaring variables in the global scope. 
Many JavaScript libraries use this technique, and of course many JS pros, too. It is especially popular amongst jQuery plugin developers. 
And you should use an IIFE in the top-level (main.js) of your applications.

In this first example, I am using it in the global scope to keep all my variables local to the anonymous function, and thus outside 
the global scope where variables can shadow (block) other already-defined variables with the same name (probably from an included library or framework). 
All of my code for the application will start in the IIFE:

*/

// All the code is wrapped in the IIFE
(function () {
var firstName = “Richard”;
function init () {
  doStuff (firstName);
  // code to start the application
}

function doStuff () {
  // Do stuff here
}

function doMoreStuff () {
 // Do more stuff here
}

// Start the application
init ();
}) ();

/*
— Note that you can also pass jQuery or any other object or variable via the parameter (the last 2 parentheses).
*/

// 2.Use With the Conditional Operator
/*
The use of the IIFE in this manner is not as well known, but it quite powerful since you can execute complex logic without 
having to setup and call a named function:
— Note the two anonymous functions in the conditional statement
— Why would you do this? Because it is powerful and badass.
— I purposely added enough space between each section so the code can read better.
*/


var unnamedDocs = [], namedDocs = ["a_bridge_runover", "great_dreamers"];

function createDoc(documentTitle) {
    var documentName = documentTitle 

        ?

 (function (theName) {
        var newNamedDoc = theName.toLocaleLowerCase().replace(" ", "_");
        namedDocs.push(newNamedDoc);

        return newNamedDoc;
    })(documentTitle)


        :


        (function () {
            var newUnnamedDoc = "untitled_" + Number(namedDocs.length + 1);
            unnamedDocs.push(newUnnamedDoc);
            return newUnnamedDoc;
        })();


    return documentName;
}
createDoc("Over The Rainbow"); // over_the rainbow
createDoc(); // untitled_4


// 3. Use it in Closures to Prevent Fold Over
// To fix side effects (bug) in closures, you can use an IIFE, such as if this example:


function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
            return function () {
                return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
            }
        } (i); // immediately invoke the function passing the i variable as a parameter
    }

    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id()); // 100

var cruiseID = createIdForActionCelebs [1];
console.log(cruiseID.id()); // 101

/*
What Topics Compose “Intermediate and Advanced JavaScript”?
Intermediate and Advanced JavaScript topics include:
— Debugging JS in the browser, Object-oriented JavaScript
— Advanced Functions: Callback functions, Bind, Curry, IIFE (Immediately Invoked Function Expression)
— Asynchronous execution, timers, Prototypal Inheritance, and Closures
— JavaScript Design Patterns, Object Creation Patterns, and Code Reuse Patterns
— Code Minification and Compression, Loading Strategies, and Dependency Management

Why Should I Learn Advanced JavaScript?
If you work as a font-end developer or you plan to develop JavaScript applications, libraries, or frameworks, it is essential 
that you understand the aforementioned advanced JavaScript topics, because you will not be able to develop complex JavaScript applications without knowing them.


Moreover, when you are familiar with all the best JavaScript techniques, even if you don’t remember how to use them, you can easily
look them up and use them in powerful ways to make your application run faster, load faster, use less code, reuse code, and perform optimally. 
Overall, you will use JavaScript as a Jedi would a lightsaber—you will easily vanquish every JS challenge with ease , eliminate bugs with relish, 
and execute tasks in an instant, compared with your previous apprentice self
*/

// Understand JavaScript Callback Functions and Use Them
/*
Callback functions are derived from a programming paradigm called functional programming. At a simple and fundamental level, functional programming is the
use of functions as arguments. Functional programming was—and still is, though to a much lesser extent today—seen as an esoteric technique
of specially trained, master programmers.


What is a Callback or Higher-order Function?

A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) 
as a parameter, and the callback function is called (executed) inside otherFunction. A callback function is essentially a pattern (an established solution to 
a common problem), and therefore, the use of a callback function is also known as a callback pattern.

Here is a simple, common use of a callback function in jQuery:

*/

//Note that the item in the click method's parameter is a function, not a variable.
//The item is a callback function
$("#btn_1").click(function() {
  alert("Btn 1 Clicked");
});


// Here is another classic example of callback functions from basic JavaScript:
var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});

/*
It is important to note that the callback function is not executed immediately. 
It is “called back” (hence the name) at some specified point inside the containing function’s body. 


The anonymous function will be called later inside the function body. Even without a name, 
it can still be accessed later via the arguments object by the containing function

// Callback Functions Are Closures

As we know, closures have access to the containing function’s scope, so the callback function can access the containing functions variables, 
and even the variables from the global scope.

// Basic Principles When Implementing Callback Functions
Callback functions are uncomplicated, but there are some basic principles when implementing callback functions that we should be familiar 
with before we start making and using our own callback functions.

// Use Named OR Anonymous Functions as Callbacks
*/

// global variable
var allUserData = [];

// generic logStuff function that prints to console
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}

// A function that takes two parameters, the last one a callback function
function getInput (options, callback) {
    allUserData.push (options);
    callback (options);

}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
//  name: Rich
// speciality: JavaScript

/*
// Pass Parameters to Callback Functions
Since the callback function is just a normal function when it is executed, we can pass parameters to it. 
We can pass any of the containing function’s properties (or global properties) as parameters to the callback function. 
In the preceding example, we pass options as a parameter to the callback function. Let’s pass a global variable and a local variable:


*/

//Global variable
var generalLastName = "Clinton";

function getInput (options, callback) {
    allUserData.push (options);
// Pass the global variable generalLastName to the callback function
    callback (generalLastName, options);
}



/*

// Make Sure Callback is a Function Before Executing It
It is always wise to check that the callback function passed in the parameter is indeed a function before calling it. 
Also, it is good practice to make the callback function optional.

Let’s refactor the getInput function from the previous example to ensure these checks are in place.

*/

function getInput(options, callback) {
    allUserData.push(options);

    // Make sure the callback is a function
    if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable
        callback(options);
    }
}


/*


Without the check in place, if the getInput function is called either without the callback function as a parameter or in place of a function 
a non-function is passed, our code will result in a runtime error.

// Problem When Using Methods With The this Object as Callbacks


When the callback function is a method that uses the this object, we have to modify how we execute the callback function to preserve the this object context. 
Or else the this object will either point to the global window object (in the browser), if callback was passed to a global function. 
Or it will point to the object of the containing method.
Let’s explore this in code:

*/


// Define an object with some properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
    id: 094545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object
    setUserName: function (firstName, lastName)  {
        // this refers to the fullName property in this object
      this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback)  {
    // Do other stuff to validate firstName/lastName here

    // Now save the names
    callback (firstName, lastName);
}

/*
In the following code example, when clientData.setUserName is executed, this.fullName will not set the fullName property on the clientData object. Instead, 
it will set fullName on the window object, since getUserInput is a global function. This happens because the this object in the global function points to 
the window object.
*/

getUserInput ("Barack", "Obama", clientData.setUserName);

console.log (clientData.fullName);// Not Set

// The fullName property was initialized on the window object
console.log (window.fullName); // Barack Obama

// Use the Call or Apply Function To Preserve this

/*

Call takes the value to be used as the this object inside the function as the first parameter, and the remaining arguments to be passed to 
the function are passed individually (separated by commas of course). The Apply function’s first parameter is also the value to be used as 
the this object inside the function, while the last parameter is an array of values (or the arguments object) to pass to the function.

This sounds complex, but lets see how easy it is to use Apply or Call. To fix the problem in the previous example, we will use the Apply function thus:

*/
//Note that we have added an extra parameter for the callback object, called "callbackObj"
function getUserInput(firstName, lastName, callback, callbackObj)  {
    // Do other stuff to validate name here

    // The use of the Apply function below will set the this object to be callbackObj
    callback.apply (callbackObj, [firstName, lastName]);
}


/*
With the Apply function setting the this object correctly, we can now correctly execute the callback and have it set the fullName property correctly on the 
clientData object:

*/

// We pass the clientData.setUserName method and the clientData object as parameters. The clientData object will be used by 
the Apply function to set the this object
getUserInput ("Barack", "Obama", clientData.setUserName, clientData);

// the fullName property on the clientData was correctly set
console.log (clientData.fullName); // Barack Obama

/*
Multiple Callback Functions Allowed
We can pass more than one callback functions into the parameter of a function, just like we can pass more than one variable. 
Here is a classic example with jQuery’s AJAX function:

*/


function successCallback() {
    // Do stuff before send
}

function successCallback() {
    // Do stuff if success message received
}

function completeCallback() {
    // Do stuff upon completion
}

function errorCallback() {
    // Do stuff if error received
}

$.ajax({
    url:"http://fiddle.jshell.net/favicon.png",
    success:successCallback,
    complete:completeCallback,
    error:errorCallback

});

/*
// “Callback Hell” Problem And Solution

In asynchronous code execution, which is simply execution of code in any order, sometimes it is common to have numerous levels of callback functions to the 
extent that you have code that looks like the following. The messy code below is called callback hell because of the difficulty of following 
the code due to the many callbacks. I took this example from the node-mongodb-native, a MongoDB driver for Node.js. [2]. The example code below is just for demonstration:
*/

var p_client = new Db('integration_tests_20', new Server("127.0.0.1", 27017, {}), {'pk':CustomPKFactory});
p_client.open(function(err, p_client) {
    p_client.dropDatabase(function(err, done) {
        p_client.createCollection('test_custom_key', function(err, collection) {
            collection.insert({'a':1}, function(err, docs) {
                collection.find({'_id':new ObjectID("aaaaaaaaaaaa")}, function(err, cursor) {
                    cursor.toArray(function(err, items) {
                        test.assertEquals(1, items.length);

                        // Let's close the db
                        p_client.close();
                    });
                });
            });
        });
    });
});


/*
You are not likely to encounter this problem often in your code, but when you do—and you will from time to time—here are two solutions to this problem. 

Name your functions and declare them and pass just the name of the function as the callback, instead of defining an anonymous function in the parameter 
of the main function.

Modularity: Separate your code into modules, so you can export a section of code that does a particular job. Then you can import that module into your 
larger application.
*/


// Make Your Own Callback Functions

/*

Now that you completely (I think you do; if not it is a quick reread :)) understand everything about JavaScript callback functions and you have seen that using
callback functions are rather simple yet powerful, you should look at your own code for opportunities to use callback functions, for they will allow you to:

Not repeat code (DRY—Do Not Repeat Yourself)

Implement better abstraction where you can have more generic functions that are versatile (can handle all sorts of functionalities)

Have better maintainability

Have more readable code

Have more specialized functions.

It is rather easy to make your own callback functions. In the following example, I could have created one function to do all the work: 
retrieve the user data, create a generic poem with the data, and greet the user. This would have been a messy function with much if/else statements and, even still, 
it would have been very limited and incapable of carrying out other functionalities the application might need with the user data.

Instead, I left the implementation for added functionality up to the callback functions, so that the main function that retrieves the user data can perform 
virtually any task with the user data by simply passing the user’s full name and gender as parameters to the callback function and then executing 
the callback function.

In short, the getUserInput function is versatile: it can execute all sorts of callback functions with myriad of functionalities.

*/
// First, setup the generic poem creator function; it will be the callback function in the getUserInput function below.
function genericPoemMaker(name, gender) {
    console.log(name + " is finer than fine wine.");
    console.log("Altruistic and noble for the modern time.");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

//The callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above.
function getUserInput(firstName, lastName, gender, callback) {
    var fullName = firstName + " " + lastName;

    // Make sure the callback is a function
    if (typeof callback === "function") {
    // Execute the callback function and pass the parameters to it
    callback(fullName, gender);
    }
}

// Call the getUserInput function and pass the genericPoemMaker function as a callback:
getUserInput("Michael", "Fassbender", "Man", genericPoemMaker);
// Output
/* Michael Fassbender is finer than fine wine.
Altruistic and noble for the modern time.
Always admirably adorned with the latest style.
A Man of unfortunate tragedies who still manages a perpetual smile.
*/

// Because the getUserInput function is only handling the retrieving of data, we can pass any callback to it. For example, we can pass a greetUser function like this:

function greetUser(customerName, sex)  {
   var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
  console.log("Hello, " + salutation + " " + customerName);
}

// Pass the greetUser function as a callback to getUserInput
getUserInput("Bill", "Gates", "Man", greetUser);

// And this is the output
Hello, Mr. Bill Gates

/*
We called the same getUserInput function as we did before, but this time it performed a completely different task.

As you can see, callback functions are fantastic. And even though the preceding example is relatively simple, imagine how much work you can save yourself 
and how well abstracted your code will be, if you start using callback functions. Go for it.

Here are common ways callback functions are frequently used in JavaScript programming, especially in modern web application development and in libraries and 
frameworks:

For asynchronous execution (such as reading files, and making HTTP requests)
In Event Listeners/Handlers
In setTimeout and setInterval methods
For Generalization: code conciseness



JavaScript callback functions are wonderful and powerful to use and they provide great benefits to your web applications and to your code. 
You should use them when the need arises; look for ways to refactor your code for Abstraction, Maintainability, and Readability with callback functions.
*/

// JavaScript Prototype in Plain Language
/*


*/



// OOP In JavaScript: What You NEED to Know

/*
(Object Oriented JavaScript: Only Two Techniques Matter)

There are two interrelated concepts with prototype in JavaScript:

1. First, there is a prototype property that every JavaScript function has (it is empty by default), and you attach properties and methods on this prototype 
property when you want to implement inheritance.Note that this prototype property is not enumerable: it is not accessible in a for/in loop. But Firefox, and 
most versions of Safari and Chrome, have a __proto__ “pseudo” property (an alternative way) that allows you to access an object’s prototype property. 
You will likely never use this __proto__ pseudo property, but know that it exists and it is simply a way to access an object’s prototype property in some browsers.
The prototype property is used primarily for inheritance: you add methods and properties on a function’s prototype property to make those 
methods and properties available to instances of that function.

Here is a very simple example of inheritance with the prototype property (more on inheritance later):
*/

function PrintStuff (myDocuments) {
this.documents = myDocuments;
}

// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:
PrintStuff.prototype.print = function () {
console.log(this.documents);
}

// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.
var newObj = new PrintStuff ("I am a new Object and I can print.");

// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
newObj.print (); //I am a new Object and I can print.

/*
2. The second concept with prototype in JavaScript is the prototype attribute. Think of the prototype attribute as a characteristic of the object; 
this characteristic tells us the object’s “parent”. In simple terms: An object’s prototype attribute points to the object’s “parent”—the object it inherited 
its properties from. The prototype attribute is normally referred to as the prototype object, and it is set automatically when you create a new object.
To expound on this: Every object inherits properties from some other object, and it is this other object that is the object’s prototype attribute or “parent.” 
(You can think of the prototype attribute as the lineage or the parent). In the example code above, newObj‘s prototype is PrintStuff.prototype.

Note: All objects have attributes just like object properties have attributes. And the object attributes are prototype, class, and extensible attributes. 
It is this prototype attribute that we are discussing in this second example.

Also note that the __proto__ “pseudo” property contains an object’s prototype object (the parent object it inherited its methods and properties from).
Constructor
Before we continue, let’s briefly examine the constructor. A constructor is a function used for initializing new objects, and you use the new keyword to call 
the constructor.
For example:
*/


function Account () {
}
// This is the use of the Account constructor to create the userAccount object.
var userAccount = new Account (); 

/*
Moreover, all objects that inherit from another object also inherit a constructor property. 
And this constructor property is simply a property (like any variable) that holds or points to the constructor of the object.
*/

//The constructor in this example is Object () 
var myObj = new Object ();
// And if you later want to find the myObj constructor:
console.log(myObj.constructor); // Object()

// Another example: Account () is the constructor
var userAccount = new Account (); 
// Find the userAccount object's constructor
console.log(userAccount.constructor); // Account()

// Prototype Attribute of Objects Created with new Object () or Object Literal

/*
All objects created with object literals and with the Object constructor inherits from Object.prototype. Therefore, 
Object.prototype is the prototype attribute (or the prototype object) of all objects created with new Object () or with {}.
Object.prototype itself does not inherit any methods or properties from any other object.
*/

// The userAccount object inherits from Object and as such its prototype attribute is Object.prototype.
var userAccount = new Object ();

// This demonstrates the use of an object literal to create the userAccount object; the userAccount object inherits from Object; therefore, its prototype attribute is 
// Object.prototype just as the userAccount object does above.
var userAccount = {name: “Mike”} 

// Prototype Attribute of Objects Created With a Constructor Function
/*
Objects created with the new keyword and any constructor other than the Object () constructor, get their prototype from the constructor function.

For Example:
*/

function Account () {

}
var userAccount = new Account () // userAccount initialized with the Account () constructor and as such its prototype attribute (or prototype object) is Account.prototype.

/*
Similarly, any array such as var myArray = new Array (), gets its prototype from Array.prototype and it inherits Array.prototype’s properties.

So, there are two general ways an object’s prototype attribute is set when an object is created:	

1. If an object is created with an object literal (var newObj = {}), it inherits properties from Object.prototype and 
we say its prototype object (or prototype attribute) is Object.prototype.

2. If an object is created from a constructor function such as new Object (), new Fruit () or new Array () or new Anything (), 
it inherits from that constructor (Object (), Fruit (), Array (), or Anything ()). For example, with a function such as Fruit (), 
each time we create a new instance of Fruit (var aFruit = new Fruit ()), the new instance’s prototype is assigned the prototype from the Fruit constructor,
which is Fruit.prototype.Any object that was created with new Array () will have Array.prototype as its prototype. 
An object created with new Fruit () will have Fruit.prototype as its prototype. And any object created with the Object constructor 
(Obj (), such as var anObj = new Object() ) inherits from Object.prototype.


It is important to know that in ECMAScript 5, you can create objects with an Object.create() method that allows you to set the new object’s prototype object. 
We will cover ECMAScript 5 in a later post.
*/

// Why is Prototype Important and When is it Used?

/*
 These are two important ways the prototype is used in JavaScript, as we noted above:
1. Prototype Property: Prototype-based Inheritance
   Prototype is important in JavaScript because JavaScript does not have classical inheritance based on Classes (as most object oriented languages do), 
and therefore all inheritance in JavaScript is made possible through the prototype property. JavaScript has a prototype-based inheritance mechanism.Inheritance 
is a programming paradigm where objects (or Classes in some languages) can inherit properties and methods from other objects (or Classes). In JavaScript, you 
implement inheritance with the prototype property. For example, you can create a Fruit function (an object, since all functions in JavaScript are objects) and 
add properties and methods on the Fruit prototype property, and all instances of the Fruit function will inherit all the Fruit’s properties and methods.

Demonstration of Inheritance in JavaScript:		

*/

function Plant () {
this.country = "Mexico";
this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor =  function () {
console.log("I am a " + this.name + " and my color is " + this.color);
}

// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function () {
if (this.isOrganic)
console.log("I am organic, Baby!");
}

function Fruit (fruitName, fruitColor) {
this.name = fruitName;
this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = new Plant ();

// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit ("Banana", "Yellow");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.

/*
Note that the showNameAndColor method was inherited by the aBanana object even though it was defined all the way up the prototype chain on the Plant.prototype object.

Indeed, any object that uses the Fruit () constructor will inherit all the Fruit.prototype properties and methods and all the properties and methods from 
the Fruit’s prototype, which is Plant.prototype. This is the principal manner in which inheritance is implemented in JavaScript and the integral role the 
prototype chain has in the process.


2. Prototype Attribute: Accessing Properties on Objects
Prototype is also important for accessing properties and methods of objects. The prototype attribute (or prototype object) of any object is the “parent” object 
where the inherited properties were originally defined.This is loosely analogous to the way you might inherit your surname from your father—he is your 
“prototype parent.” If we wanted to find out where your surname came from, we would first check to see if you created it yourself; if not, the search will move to 
your prototype parent to see if you inherited it from him. If it was not created by him, the search continues to his father (your father’s prototype parent).

Similarly, if you want to access a property of an object, the search for the property begins directly on the object. If the JS runtime can’t find the property there, 
it then looks for the property on the object’s prototype—the object it inherited its properties from.

If the property is not found on the object’s prototype, the search for the property then moves to prototype of the object’s prototype (the father of the object’s 
father—the grandfather). And this continues until there is no more prototype (no more great-grand father; no more lineage to follow). This in essence is the 
prototype chain: the chain from an object’s prototype to its prototype’s prototype and onwards. And JavaScript uses this prototype chain to look for properties 
and methods of an object.If the property does not exist on any of the object’s prototype in its prototype chain, then the property does not exist 
and undefined is returned.

This prototype chain mechanism is essentially the same concept we have discussed above with the prototype-based inheritance, except we are now focusing 
specifically on how JavaScript accesses object properties and methods via the prototype object.

This example demonstrates the prototype chain of an object’s prototype object:

*/




var myFriends = {name: "Pete"};

// To find the name property below, the search will begin directly on the myFriends object and will immediately find the name property because we defined the property name on the myFriend object. This could be thought of as a prototype chain with one link.
console.log(myFriends.name);

// In this example, the search for the toString () method will also begin on the myFriends’ object, but because we never created a toString method on the myFriends object, the compiler will then search for it on the myFriends prototype (the object which it inherited its properties from).

// And since all objects created with the object literal inherits from Object.prototype, the toString method will be found on Object.prototype—see important note below for all properties inherited from Object.prototype. 

myFriends.toString ();

/*
Object.prototype Properties Inherited by all Objects
All objects in JavaScript inherit properties and methods from Object.prototype. These inherited properties and methods are constructor, hasOwnProperty (), 
isPrototypeOf (), propertyIsEnumerable (), toLocaleString (), toString (), and valueOf (). ECMAScript 5 also adds 4 accessor methods to Object.prototype.
Here is another example of the prototype chain:
*/

function People () {
this.superstar = "Michael Jackson";
}
// Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
People.prototype.athlete = "Tiger Woods";

var famousPerson = new People ();
famousPerson.superstar = "Steve Jobs";

// The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain. 
console.log (famousPerson.superstar); // Steve Jobs

// Note that in ECMAScript 5 you can set a property to read only, and in that case you cannot overwrite it as we just did.

// This will show the property from the famousPerson prototype (People.prototype), since the athlete property was not defined on the famousPerson object itself.
console.log (famousPerson.athlete); // Tiger Woods

// In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.
console.log (famousPerson.toString()); // [object Object]

/*
All built-in constructors (Array (), Number (), String (), etc.) were created from the Object constructor, and as such their prototype is Object.prototype.

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
