const chai = require("chai");
const chaiHttp = require("chai-http");
const fs = require("fs");
const path = require("path");

chai.should();
chai.use(chaiHttp);

describe("JSONPlaceholder API Test Suite", () => {
  it("should fetch a post with ID 1", (done) => {
    chai
      .request("https://jsonplaceholder.typicode.com") // Base URL
      .get("/posts/1") // Endpoint
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("id").eql(1);
        res.body.should.have.property("title");
        res.body.should.have.property("body");

        // Save the response body to a file
        const filePath = path.join(__dirname, "test-results", "response.json");
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify(res.body, null, 2));

        done();
      });
  });
});
