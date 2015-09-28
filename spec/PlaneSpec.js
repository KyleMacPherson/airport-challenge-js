describe('Plane',function() {
  
  var plane;  

  beforeEach(function() {
    plane = new Plane();
});

  it('flying when created', function() {
    expect(plane.isFlying).toBe(true);
  });
});