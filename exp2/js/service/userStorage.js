console.log(app);
app.factory("UserStorage",function(){
	'use strict';
	var USER_DETAILS = "USER-DETAILS";
	return {
		get: function(){
			//return "I am get";
			
			return  JSON.parse(localStorage.getItem(USER_DETAILS) ||  '[]');
		},
		put: function(user){
			return localStorage.setItem(USER_DETAILS,JSON.stringify(user));
		}
	};
});