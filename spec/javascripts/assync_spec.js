describe("Asynchronous specs", function() {

    var value;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    beforeEach(function(done) {
      setTimeout(function() {
        value = 0;
        done();
      }, 9000);
    });

    it("should support async executions of test preparations and expectations", function() {
      value++;
      expect(value).toBeGreaterThan(0);
    });
});
