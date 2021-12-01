import server from "../../server";
import supertest from "supertest";
import regeneratorRuntime from "regenerator-runtime";
const requestWithSupertest = supertest(server);

describe("Login endpoint", () => {
  it("POST /auth/login should login user", async () => {
    const res = await requestWithSupertest
      .post(`/api/v1/auth/login`)
      .send({ email: "", password: "" });

    expect(res.statusCode).toEqual(200);
 
    // expect(res.body)
  });

  // it("POST /auth/login should deny user", async () => {
  //   const res = await requestWithSupertest
  //     .post(`/api/v1/auth/login`)
  //     .send({ email: "", password: "" });
  //   expect(res.statusCode).toEqual(401);
  // });
});
