var Dictionary = function() {};
Dictionary.prototype.hello = function() {
  return "hello";
};

var Person = function() {};
Person.prototype.sayHello = function(dict) {
  return dict.hello();
};

