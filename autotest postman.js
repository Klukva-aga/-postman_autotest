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

pm.test("Name is a non-empty string", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.name).to.be.a('string').and.to.have.lengthOf.at.least(1, "Name should not be empty");
});

pm.test("Residents array should not be empty", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.residents).to.be.an('array').that.is.not.empty;
});

pm.test("Films array should not be empty", function () {
    const responseData = pm.response.json();
    pm.expect(responseData.films).to.be.an('array').that.is.not.empty;
});

pm.test("Rotation period is a non-empty string and a valid number", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.rotation_period).to.be.a('string').and.to.have.lengthOf.at.least(1, "Rotation period should not be empty");
    pm.expect(responseData.rotation_period).to.match(/^\d+$/);
});

pm.test("Residents array contains valid URLs", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.residents).to.be.an('array').and.to.have.length.above(0);
    
    responseData.residents.forEach(function(residentUrl) {
        pm.expect(residentUrl).to.match(/^https:\/\/swapi\.dev\/api\/people\/\d+\/$/);
    });
});

pm.test("Films array contains valid URLs", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData.films).to.be.an('array').and.to.have.lengthOf.at.least(1);

    responseData.films.forEach(function(film) {
        pm.expect(film).to.match(/^https?:\/\/.+/);
    });
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

pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Pilots array is present and has expected number of elements", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.pilots).to.be.an('array').and.to.have.lengthOf(0);
});

pm.test("Name, model, and manufacturer must exist", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.name).to.exist;
    pm.expect(responseData.model).to.exist;
    pm.expect(responseData.manufacturer).to.exist;
});

pm.test("Pilots array is present and has the expected number of elements", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.pilots).to.be.an('array');
    pm.expect(responseData.pilots.length).to.equal(0);
});

pm.test("Films array is present and has expected number of elements", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.films).to.be.an('array').and.to.have.lengthOf(1);
});

pm.test("Verify the existence of 'created' and 'edited' fields", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.created).to.exist;
    pm.expect(responseData.edited).to.exist;
});
