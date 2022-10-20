//autotest for any method

pm.test("Waiting for response with status 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

//autotest for method https://swapi.dev/api/planets/7

pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.orbital_period).to.eql("402");
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Endor");
});

pm.test("Successful POST request", () => {
  pm.expect(pm.response.code).to.be.oneOf([200,201,202]);
});

//autotest for method https://swapi.dev/api/starships/5

pm.test("Content-Type header is application/json", () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
});

pm.test("Cookie JSESSIONID is present", () => {
  pm.expect(pm.cookies.has('JSESSIONID')).to.be.false;
});

const jsonData = pm.response.json();
pm.test("Test array properties", () => {
});