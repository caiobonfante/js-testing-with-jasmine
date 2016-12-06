describe('Spies examples', function() {

  beforeEach(function() {
    dict = new Dictionary;
    person = new Person;
  });

  it('says hello', function() {
    spyOn(dict, 'hello').and.returnValue('hello');
    expect(person.sayHello(dict)).toEqual('hello');
  });

  it('uses dict to says hello', function() {
    spyOn(person, 'sayHello');

    person.sayHello(dict);
    expect(person.sayHello).toHaveBeenCalledWith(dict);
  });

  it ('call dict hello', function() {
    spyOn(dict, 'hello').and.callThrough();

    var result = person.sayHello(dict);
    expect(dict.hello).toHaveBeenCalled();
    expect(result).toEqual('hello');
  });

  it ('can call a fake function', function() {
    var fakeHello = function() {
      return 'ola';
    };

    spyOn(dict, 'hello').and.callFake(fakeHello);
    expect(dict.hello()).toEqual('ola');
  });
});

