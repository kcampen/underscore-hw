console.log('\'Allo \'Allo!');

var students = [
	{name: 'Mason'},
	{name: 'Joe'},
	{name: 'Eric'},
]

// _.rest will return everuthing but the first item 
// in an array. in this case [{name: 'Joe'}, {name: 'Eric'}]
_.rest(students)

// why does this return empty?





var colors = ['red', 'blue', 'green', 'purple', 'orange', 'seafoam'];

// example 1
_.first(colors)
//  returns "red"

// exapmle 2
_.last(colors)
//  returns "seafoam"

// exapmle 3
_.rest(colors)
// returns ["blue", "green", "purple", "orange", "seafoam"]

// example 4
_.initial(colors)
// returns  ["red", "blue", "green", "purple", "orange"]



var gummybears = [
{flavor:'strawberry', amount: 13},
{flavor: 'pineapple', amount: 11},
{flavor: 'raspberry', amount: 9},
{flavor: 'lemon', amount: 15}
];


// error with this one
// var order = _.chain(gummybears)
// .sortBy(function(gummybears){ return gummybears.amount; })
  // .map(function(gummybears){ return gummybears.flavor + ' has ' + gummybears.amount; })
  // .first()
  // .value();

// example 5
_.pluck(flavor, 'flavor');
// returns ["strawberry", "pineapple", "raspberry", "lemon"]

// example 6
_.indexBy(gummybears, 'amount')
// returns Object {9: Object, 11: Object, 13: Object, 15: Object}

// example 7
_.contains(gummybears, 'seaweed');
// returns = false
// but when _.contains(gummybears, 'raspberry'); also returns false?

// example 8
_.size(gummybears);
// returns 4 (how many objects are in the variable. how many types of gummybears.)
// trying to get total amount of bears. tried :  _.size('amount'); that gave me the size of the string.


// example 9
_.isString('strawberry');
//  returns true

// example 10 escapes a string for insertion into HTML
_.escape('strawberry, pineapple, raspberry and lemon')
// returns "strawberry, pineapple, raspberry and lemon"

// example 11
_.groupBy(['strawberry', 'pineapple', 'raspberry', 'lemon'], 'length');
// returns Object {5: Array[1], 9: Array[2], 10: Array[1]}
// 		5: Array[1]
// 		9: Array[2]
// 		10: Array[1]
// 		__proto__: Object




var toddy = [
{name: 'toddy'},
{age: 7},
{species: 'dog'},
{color: 'black'},
{playsFetch: true}
];

// example 12
_.extend({name: 'toddy'},{species: 'dog'});
// returns Object {name: "toddy", species: "dog"}

// example 13
toddy === _.identity(toddy);
// returns true

// example 14
_.pairs({name: 'toddy', age: 7, species: 'dog', color: 'black', playsfetch: true});
[
Array[2]
0: "name"
1: "toddy"
length: 2
__proto__: Array[0]
, 
Array[2]
0: "age"
1: 7
length: 2
__proto__: Array[0]
, 
Array[2]
0: "species"
1: "dog"
length: 2
__proto__: Array[0]
, 
Array[2]
0: "color"
1: "black"
length: 2
__proto__: Array[0]
, 
Array[2]
0: "playsfetch"
1: true
length: 2
__proto__: Array[0]
]
// Convert an object into a list of [key, value] pairs.

// example 15
_.omit({name: 'toddy', age: 7, species: 'dog', color: 'black', playsfetch: true}, 'playsfetch')
// returns Object {name: "toddy", age: 7, species: "dog", color: "black"}



var threes = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

var fives = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


// example 16
_.difference(threes, fives);
// returns [3, 6, 9, 12, 18, 21, 24, 27]

// example 17
_.min(threes);
// returns 3
_.min(fives):
// returns 5

// example 18
_.contains(threes, 62);
// returns false
_.contains(threes, 3);
//  returns true

// example 19 
_.find([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], function(numb){return numb % 5 == 0});
// returns 15
_.find([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], function(numb){return numb % 2 == 0});
// returns 6

// example 20
_.reject([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], function(numb){return numb % 5 == 0});
// returns [3, 6, 9, 12, 18, 21, 24, 27]

// example 21
_.filter([3, 6, 9, 12, 15, 18, 21, 24, 27, 30], function(numb){return numb % 5 == 0});
//  returns [15, 30]























