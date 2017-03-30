var obj = {
	idcard:{
		key1: "a.jpg",
		key2: 'b.jpg'
	},
	storephotos:{
		key1: 'c.jpg',
		key2: 'd.jpg',
		key3: 'e.jpg'
	},
	license:{
		key1: 'f.jpg',
		key2: 'g.jpg'
	}
}

var obj = "'a.jpg','b.jpg','c.jpg'";
var obj2 = []
obj2 = obj.split(",");

function a(){
	return 1;
}
console.log('1',a);

(function() {
	console.log(this);
	console.log(this.a);
	console.log('2', a);
	if (true) {
		console.log('3', a);
		function a() {
			return 2;
		}
	}
})();


var a = "a.jpg";
var b = "b.jpg";
var c = [];
c[0] = a;
c[1] = b;