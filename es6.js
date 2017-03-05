var numbers = [1,2,3,4,5,6,7,8];
numbers.sort();

var getTempItem = id => ({ id: id, name: 'Temp'});

const full = ({ first, last }) => first + ' ' + last;

[1,2,3].map(x => x * x);

var result = values.sort((a, b) => a - b);

const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)

function foo() {
	setTimeout(() => {
		console.log('id:', this.id);
	}, 1000);
}

var id = 21;

foo.call({ id: 42 });

function Timer() {
	this.s1 = 0;
	this.s2 = 0;

	setInterval(() => this.s1++, 1000);

	setInterval(function () {
		this.s2++;
	}, 1000);
}

var timer = new Timer();

setInterval(() => console.log('s1: ', timer.s1), 3100)
setInterval(() => console.log('s2: ', timer.s2), 3100)


var handler = {
	id: '123456',

	init: function() {
		document.addEventListener('click',
			event => this.doSomething(event.type), false);
	},

	doSomething: function(type) {
		console.log('Handling ' + type + ' for ' + this.id);
	} 

	// doSomething: (type) => let id = '123' console.log('Handling ' + type + ' for ' + this.id)
	 
}

function foo() {
	return () => {
		return () => {
			return () => {
				console.log('id:', this.id);
			}
		}
	}
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()();
var t2 = f().call({id: 3})();
var t3 = f()().call({id: 4});

(function() {
	return [
		(() => this.x).bind({ x: 'inner' })()
	];
}).call({ x: 'outer' });

function foo() {
	setTimeout(() => {
		console.log('args:', arguments);
	},500);
}
foo(2, 4, 6, 8)

function insert(value) {
	return {into: function (array) {
		return {after: function (afterValue) {
			array.splice(array.indexOf(afterValue) + 1, 0, value);
			return array;
		}};
	}};
}

let insert = (value) => ({into: (array) => ({after: (afterValue) => {
	array.splice(array.indexOf(afterValue) + 1, 0, value);
	return array;
}})});

insert(2).into([1,3]).after(1);

var flattened1 = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) { 
  return a.concat(b);
}, ['a','b']);


function factorial(n) {
	if(n === 1) return 1;
	return n * factorial(n - 1);
}
factorial(5)

function factorial(n, total) {
	if(n === 1) return total;
	return factorial(n - 1, n * total);
}

factorial(5,1)

function Fibonacci2 (n, ac1 = 1, ac2 = 1) {
	if(n <= 1) {return ac2};

	return Fibonacci2 ( n - 1, ac2, ac1 + ac2 );
}
Fibonacci2(100)

function currying(fn, n){
	return function (m) {
		return fn.call(this, m, n);
	};
}

function tailFactorial(n, total) {
	if(n === 1) return total;
	return tailFactorial(n-1, n* total);
}

const factorial = currying(tailFactorial, 1);

factorial(5)

function factorial(n, total = 1) {
	if(n === 1) return total;
	return factorial(n-1, n * total);
}


var cart = {
	_wheel: 4,

	get wheels () {
		return this._wheels;
	},

	set wheels (value) {
		if(value < this._wheels) {
			throw new Error('数值太小了！');
		}
		this.wheels = value;
	}
}

var mySymbol = Symbol();

var a = {};
a[mySymbol] = 'Hello!';

var a = {
	[mySymbol]: 'Hello!'
}

var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

a[mySymbol]


var shapeType = {
	triangle: 'Triangle'
};

function getArea(shape, options) {
	var area = 0;
	switch (shape) {
		case shapeType.triangle:
			area =  .5 * options.width * options.height;
			break;
	}
	return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 })

var obj = {};
var a = Symbol('a');
var b = Symbol('b');

obj[a] = 'hello';
obj[b] = 'World';

var objectSymbols = Object.getOwnPropertySymbols(obj);
objectSymbols


var size = Symbol('size');

class Collection {
	constructor() {
		this[size] = 0;
	}

	add(item) {
		this[this[size]] = item;
		this[size]++;
	}

	static sizeOf(instance) {
		return instance[size];
	}
}

var x = new Collection();
Collection.sizeOf(x)

class MyClass {
	[Symbol.hasInstance](foo) {
		return foo instanceof Array;
	}
}

[1, 2, 3] instanceof new MyClass();


class Even {
	static [Symbol.hasInstance](obj) {
		return Number(obj) % 2 === 0;
	}
}

1 instanceof Even

const s = new Set();

[2, 3, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
	console.log(i);
}


var set = new Set([1, 2, 3, 4, 4]);
[...set]


function divs () {
	return [...document.querySelectorAll('div')];
}

var set = new Set(divs());


let set1 = new Set();
set1.add({});
set1.size


var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);


Object.prototype.toString.apply(value) === '[object Array]'


function dedupe(array) {
	return Array.from(new Set(array));
}

dedupe([1,1,2,2,3,3,4])


Set.prototype[Symbol.iterator] === Set.prototype.values


let set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2))


let set = new Set(['red', 'green', 'blue']);
let arr = [...set];


const foos = new WeakSet()
class Foo {
	constructor() {
		foos.add(this)
	}
	method () {
		if(!foos.has(this)) {
			throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！')
		}
	}
}


var m = new Map();
var o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o)


let map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size


var obj = new Proxy({}, {
	get: function (target, key ,receiver) {
		console.log(`getting ${key}!`);
		return Reflect.get(target, key, receiver);
	},
	set: function (target, key, value, receiver) {
		console.log(`setting ${key}!`);
		return Reflect.set(target, key, value, receiver);
	}
});


var proxy = new Proxy(target, handler);


var proxy2 = new Proxy({}, {
	get: function(target, property) {
		return 35;
	}
})


function createArray(...elements) {
	let handler = {
		get(target, propKey, receiver) {
			let index = Number(propKey);
			if(index < 0) {
				propKey = String(target.length + index);
			}
			return Reflect.get(target, propKey, receiver);
		}
	};

	let target = [];
	target.push(...elements);
	return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');


var handler = {
	apply (target, ctx, args) {
		return Reflect.apply(...arguments);
	}
};


var target = () => { return 'I am the target' };
var handler = {
	apply: () => { return 'I an the proxy' }
};

var p = new Proxy(target, handler);


const person = observable({
	name: '张三',
	age: 20
});

function print() {
	console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';


const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj,{set});

function set(target, key, value, receiver) {
	const result = Reflect.set(target, key, value, receiver);
	queuedObservers.forEach(observer => observer());
	return result;
}


Promise
Pending
Resolved
Rejected


var promise = new Promise(function(resolve, reject){

	if (success) {
		resolve(value);
	} else {
		reject(error);
	}
})

promise.then(function (value) {
	// success
}, function(error) {
	// failure
})


function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	});
}

timeout(100).then((value) => {
	console.log(value);
});


let promise = new Promise(function(resolve, reject) {
	console.log('Promise');
	resolve();
});

promise.then(function() {
	console.log('Resolved.');
});

console.log('Hi!')


function loadImageAsync(url) {
	return new Promise(function(resolve, reject) {
		var image = new Image();

		image.onload = function(){
			resolve(image);
		};

		image.onerror = function(){
			reject(new Error('Could not load image at ' + url));
		};

		image.src = url;
	});
}


var getJson = function(url) {
	var promise = new Promise(function(resolve, reject) {
		var client = new XMLHttpRequest();
		client.open('GET', url);
		client.onreadystatechange = handler;
		client.responseType = 'json';
		client.setRequestHeader('Accept', 'application/json');
		client.send();

		function handler(){
			if (this.readyState !== 4) {
				return;
			}
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
	});

	return promise;
};

getJson('/post.json').then(function(json) {
	console.log('Content:' + json);
}, function(error) {
	console.error('出错了', error);
});


Object.prototype.toString.apply(value) === '[object Array]';
Object.prototype.toString.apply(value) === '[object Array]';


Symbol.iterator


const obj = {
	[Symbol.iterator] : function () {
		return {
			next: function () {
				return {
					value: 1,
					done: true
				};
			}
		};
	}
};


let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next()


class RangeIterator {
	constructor(start, stop) {
		this.value = start;
		this.stop = stop;
	}

	[Symbol.iterator]() { return this; }

	next() {
		var value = this.value;
		if (value < this.stop) {
			this.value++;
			return { done: false, value: value };
		} else {
			return { done: true, value: undefined };
		}
	}
}

function range(start, stop) {
	return new RangeIterator(start, stop);
}

for (var value of range(0, 3)) {
	console.log(value);
}


function Obj(value) {
	this.value = value;
	this.next = null;
}

Obj.prototype[Symbol.iterator] = function() {
	var iterator = {
		next: next
	};

	var current = this;
	function next() {
		if (current) {
			var value = current.value;
			current = current.next;
			return {
				done: false,
				value: value
			};
		} else {
			return {
				done: true
			};
		}
	}
	return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for(var i of one) {
	console.log(i)
}


let obj = {
	data: [ 'hello', 'world' ],
	[Symbol.iterator]() {
		const self = thisl
		let index = 0 ;
		return {
			next() {
				if (index < self.data.length) {
					return {
						value: self.data[index++],
						done: false
					};
				} else {
					return { value: undefined, done: true };
				}
			}
		};
	}
};


[...document.querySelectorAll('div')]


let set = new Set().add('a').add('b').add('c');

let [x, y] = set;

let[first, ...rest] = set;


let generator = function* () {
	yield 1;
	yield* [2,3,4];
	yield 5;
};

var iterator = generator();

iterator.next()


var myIterable = {};
myIterable[Symbol.iterator] = function* () {
	yield 1;
	yield 2;
	yield 3;
};
[...myIterable]

let obj = {
	* [Symbol.iterator]() {
		yield 'hello';
		yield 'world';
	}
};

for(let x of obj) {
	console.log(x)
}


const arr = ['red', 'green', 'blue'];

for(let v of arr) {
	console.log(v)
}

const obj = {};
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

for(let v of obj) {
	console.log(v);
}


function* entries(obj) {
	for (let key of Object.keys(obj)) {
		yield [key, obj[key]];
	}
}

for ( let [key, value] of entries(obj)) {
	console.log(key, '->', value);
}


function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hw = helloWorldGenerator();

hw.next();


function* f() {
	console.log('执行了！')
}

var generator = f();

setTimeout(function(){
	generator.next();
},2000)



(function (){
	yield 1;
}) ();


var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
	var length = a.length;
	for (var i = 0; i < length; i++) {
		var item = a[i];
		if (typeof item !== 'number') {
			yield* flat(item);
		} else {
			yield item;
		}
	}
};

for (var f of flat(arr)) {
	console.log(f);
}



var myIterable = {};
myIterable[Symbol.iterator] = function* () {
	yield 1;
	yield 2;
	yield 3;
};

[...myIterable]


function* f() {
	for(var i = 0; true; i++) {
		var reset = yield i;
		if(reset){ i = -1 }
	}
}


function* foo(x) {
	var y = 2 * (yield (x + 1));
	var z = yield (y / 3);
	return (x + y + z);
}

var a = foo(5)



function wrapper(generatorFunction) {
	return function (...args) {
		let generatorObject = generatorFunction(...args);
		generatorObject.next();
		return generatorObject;
	};
}

const wrapped = wrapper(function* () {
	console.log(`First input: $(yield)`);
	return 'DONE';
});

wrapped().next('hello!')



function* fibonacci() {
	let[prev, curr] = [0, 1];
	for(;;) {
		[prev, curr] = [curr, prev + curr];
		yield curr;
	}
}

for(let n of fibonacci()) {
	if (n > 100) break;
	console.log(n);
 }


 function* objectEntries(obj) {
 	let propKeys = Reflect.ownKeys(obj);

 	for (let propKey of propKeys) {
 		yield [propKey, obj[propKey]];
 	}
 }

 let jane = { first: 'Jane', last: 'Doe' };

 for (let [key, value] of objectEntries(jane)) {
 	console.log(`${key}: ${value}`);
 }



function* main() {
	var result = yield request("http://some.url");
	var resp = JSON.parse(result);
	console.log(resp.value);
}

function request(url) {
	makeAjaxCall(url, function(response) {
		it.next(response);
	});
}

var it = main();
it.next();



fs.readFile(fileName, callback);

var Thunk = function (fileName) {
	return function (callback) {
		return fs.readFile(fileName, callback);
	};
};

var readFileThunk = Thunk(fileName);
readFileThunk(callback);



// Thunk 函数转换器 ES6
var Thunk = function(fn) {
	return function (...args) {
		return function (callback) {
			return fn.call(this, ...args, callback);
		}
	};
};

function f(a, cb) {
	cb(a);
}
let ft = Thunk(f);

let log = console.log.bind(console);
ft(1)(log)



function run (fn) {
	var gen = fn();

	function next(err, data) {
		var result = gen.next(data);
		if (result.done) return;
		result.value(next);
	}

	next();
}

function* g() {

}

run(g);



// 自动执行器
function run(gen){
	var g = gen();

	function next(data) {
		var result = g.next(data);
		if(result.done) return result.value;
		result.value.then(function(data) {
			next(data);
		});
	}

	next();
}

run(gen);



// co
function co(gen) {
	var ctx = this;

	return new Promise(function(resolve, reject) {
		if (typeof gen === 'function') gen = gen.call(ctx);
		if (!gen || typeof gen.next !== 'function') return resolve(gen);

		onFulfilled();
		function onFulfilled(res) {
			var ret;
			try {
				ret = gen.next(res);
			} catch (e) {
				return reject(e);
			}
			next(ret);
		}
	});
}

 var a = 1;
 (function(){
 	console.log(a);
 	var a = 100;
 	function b(){
 		console.log(a);
 	}
 })()


 class Point {
 	constructor() {
 		// ...
 	}
 }

 Object.assign(Point.prototype, {
 	toString(){},
 	toValue(){}
 });


  this.x = 9;
  var module = {
  	x: 81,
  	getX: function() {
  		return this.x;
  	}
  };

  module.getX(); // 81

  var retrieveX = module.getX;
  retrieveX();  // 9

  var boundGetX = retrieveX.bind(module);
  boundGetX();  // 81



function list() {
	return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3);

var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList();
var list3 = leadingThirtysevenList(1, 2, 3);


var a = 3,b = 5;
交换a和b的值，the  more the better


function LateBloomer() {
	this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

LateBloomer.prototype.bloom = function() {
	window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
	console.log('I am a beautiful flower width ' + this.petalCount + 'petals!');
}

var flower = new LateBloomer();
flower.bloom();

if (typeof(Worker) !== "undefined"){
	console.log('Yes! Web worker support!')
} else {
	console.log('Sorry! No Web Worker supper..')
}


http://mobile.yangkeduo.com/group503.html?group_order_id=187254921304960589&_wv=1&refer_share_id=ulB7hUQ2dJFZzMFdsn8SsCLd3QWcoBfK&refer_share_uid=4792517197&refer_share_channel=qq&_wv=1


if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		if (typeof this !== "function") {
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			fNOP = function () {},
			fBound = function () {
				return fToBind.apply(this instanceof fNOP 
										? this 
										: oThis || this,
										aArgs.concat(Array.prototype.slice.call(arguments))
										);
			};

		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();

		return fBound;
	}
}


var a = 1;
function b() {
	var a = 2;
	function c(){
		console.log(a);
	}
	return c;
}b()();

var y = 1;
if (function f(){}) {
	y += typeof f;
}
console.log(y);


var globalVar = "abc"; 

// Parent self invoking function 
(function outerFunction (outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope 
    var outerFuncVar = 'x';    
    // Closure self-invoking function 
    (function innerFunction (innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y"; 
        console.log(          
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +   
            "innerFuncVar = " + innerFuncVar + "\n" +
            "globalVar = " + globalVar);
 
    })(5); // Pass 5 as parameter 
})(7); // Pass 7 as parameter 
// innerFunction is closure that is defined inside outerFunc
7
x
5
y
abc


function mul (x) {
	return function (y) {
		return function (z) {
			return x * y * z;
		};
	};
}


Object.prototype.toString.call( obj ) === '[object Array]';

function isArray(obj) {
	return obj.__proto__ === Array.prototype;
}


function showScope() {
	return scope;
}
console.log(showScope())
var scope = "global";
console.log(scope);


function checking(amount) {
	this.balance = amount;
	this.deposit = deposit;
	this.withdraw = withdraw;
	this.toString = toString;
}

function deposit(amount) {
	this.balance += amount;
}

function withdraw(amount) {
	if (amount <= this.balance) {
		this.balance -= amount;
	}
	if (amount > this.balance) {
		console.log("Insufficient funds");
	}
}

function toString() {
	return "Balance: " + this.balance;
}

var account = new checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString());
account.withdraw(800);
console.log(account.toString());

var arr = [1,2,3,4,5],
	arr2 = [];

function getNum(a,b){
	for(var i = b; b <= a; b++){
		arr2.push(arr[i]);
	}
}
getNum(3,2)

function getNum(a, b){
	var isArray = Object.prototype.toString.call(arr) === '[object Array]',
		len = arr.length;
		arr2 = [];
	if(isArray && len => 2) {
		if ( a < b){
		console.log("前索引需大于等于后索引");
		}
		for(var i = b; b <= a; b++){
			arr2 = arr2.push(arr[i])
		}
	} else {

	}
}

var obj = "Hello world I am rain";
var arr = obj.split(" ");


var nums = [2, 3, 4, 5];
var newnum = 1;
nums.unshift(newnum);


Array.matrix = function(numrows, numcols, initial) {
	var arr = [];
	for (var i = 0; i < numrows; ++i) {
		var columns = [];
		for (var j = 0; j < numcols; ++j) {
			columns[j] = initial;
		}
	arr[i] = columns;
	}
	return arr;
}



