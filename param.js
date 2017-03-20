// js序列化key/value 对象

var personObj = new Object(),
	arr = [];
	personObj.firstname = "Bill";
	personObj.lastname = "Gates";
	personObj.age = 60;
	personObj.eyecolor = "blue";

function toParam( obj ) {
	for(var i in obj){
		arr.push(i + '=' + obj[i]);
	}
	return arr.join('&');
}

toParam(personObj);