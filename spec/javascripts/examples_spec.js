var myCustomMatchers = {
  toBeDivisibleBy: function () {
    return {
      compare: function (actual, expected) {
        return {
          pass: actual % expected === 0
        };
      }
    };
  }
};

describe('Person',function () {

  beforeEach(function () {
    person = new Person;
    dict = new Dictionary;
  });

  it ('says hello', function () {
    person.sayHello(dict);
    expect(dict.hello).toHaveBeenCalled();
  });

  it ('uses a dict to say hello', function () {
    spyOn(person, 'sayHello');
    person.sayHello(dict);
    expect(person.sayHello).toHaveBeenCalledWith(dict);
  });

  it ('can do a mock and call the real function at same time', function () {
    spyOn(dict, 'hello').and.callThrough();
    person.sayHello(dict);
    expect(dict.hello).toHaveBeenCalled();
    expect(person.sayHello(dict)).toEqual('hello');
  })

  it ('can mock a return value', function () {
    spyOn(dict, 'hello').and.returnValue('hello');
    person.sayHello(dict);
    expect(person.sayHello).toHaveBeenCalledWith(dict);
    expect(person.sayHello(dict)).toEqual('hello');
  })

  it ('can fake a hello function', function () {
    var fakeHello = function () {
      return 'hello';
    };
    spyOn(dict, 'hello').and.callFake(fakeHello);
    person.sayHello(dict);
    expect(dict.hello).toHaveBeenCalled();
    expect(person.sayHello(dict)).toEqual('hello');
  });
});

describe('getARandomInteger', function () {
  it('give a random integer', function () {
    jasmine.addMatchers(myCustomMatchers);
    expect(getARandomIntegerDivisibleByTwo()).toBeDivisibleBy(2);
  });
});

describe('jasmine', function () {
  var value;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 8000;

  beforeAll(function (done) {
    setTimeout(function () {
      value = 0;
      done();
    }, 7000);
  });

  it('should support async calls', function () {
    value += 1;
    expect(value).toBeGreaterThan(0);
  });
});
