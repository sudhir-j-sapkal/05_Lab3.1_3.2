const request = require('supertest');
const app = require('./app.js');

describe ("Test For Routes Testing", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/").send({})
        expect(response.statusCode).toBe(200)
    })
    test("should respond with a 404 status code", async () => {
        const response = await request(app).get("/example").send({})
        expect(response.statusCode).toBe(404)
    })
    test("should respond with a 405 status code", async () => {
        const response = await request(app).put("/").send({})
        expect(response.statusCode).toBe(405)
    })

    test("should respond with a data", async () => {
        const response = await request(app).post("/getdata");
        console.log('response', response.body.userId);
        expect(response.body.userId).toBe(100)
    })
});
