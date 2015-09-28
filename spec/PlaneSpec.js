describe('Plane',function() {

  var plane;

  // beforeEach(function() {
  //   plane = new Plane();
  // });

  it('flying when created', function() {
    plane = new Plane;
    expect(plane.isFlying).toBe(true);
  });

  it('is not flying when landed', function() {
    plane = new Plane;
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

});
