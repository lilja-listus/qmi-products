const faker = require("faker");
const sinon = require("sinon");
const chai = require("chai");
const userModel = require("../../controllers/user");

const User = require("../../models/user");

describe("User controller unit tests", () => {
  describe("#userById", () => {
    let sandbox;
    let id;
    let res;
    let req;
    let findByIdStub;
    let user;

    before(async () => {
      sandbox = sinon.createSandbox();

      id = faker.random.uuid();
      res = { status: faker.random.word() };
      req = { profile: faker.random.word() };
      user = {};
      let next = () => {};

      findByIdStub = sandbox.stub(User, "findById");
      findByIdStub.resolves(user);

      await userModel.userById(req, res, next, id);
    });

    after(() => {
      sandbox.restore();
    });

    it("should call findById once", () => {
      chai.assert.isTrue(findByIdStub.calledOnce);
    });

    it("should call userById with expected arguments ", () => {
      sinon.assert.calledWithExactly(findByIdStub, id);
    });

    it("should return expected user", () => {
      chai.assert.strictEqual(user, req.profile);
    });
  });
});
