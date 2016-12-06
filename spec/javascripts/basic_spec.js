var myCustomMatchers = {      
  toBeDivisibleByTwo: function () {
    return {
      compare: function (actual, expected) {
        return {
	  pass: (actual % 2) === 0
	};
      }
    };
  }
};

describe('basic examples', function() {

  it('says hello world', function() {
    expect(helloWorld()).toEqual('Hello world');
  });

  it('give a number divisible by 2', function() {
    jasmine.addMatchers(myCustomMatchers);
    expect(getANumberDivisibleByTwo()).toEqual(jasmine.any(Number));
    expect(getANumberDivisibleByTwo()).toBeDivisibleByTwo();
  });
});
