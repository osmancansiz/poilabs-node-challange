const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../app");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);
chai.use(chaiHttp);

describe("/GET Points", () => {
  it("it should GET All points ", () => {
    chai
      .request(server)
      .get("/points")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});
