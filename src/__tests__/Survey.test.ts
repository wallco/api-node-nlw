import request from 'supertest';
import { createConnection } from 'typeorm';
import { app } from '../app';


describe("Surveys", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new survey", async () => {
        const response = await request(app).post("/surveys").send({
            title: "title ex",
            description: "desc ex"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    });

    it("Should be able to get all surveys", async () => {
        await request(app).post("/surveys").send({
            title: "title2 ex",
            description: "desc3 ex"
        });

        const response = await request(app).get("/surveys");

        expect(response.body.length).toBe(2);
    });  

});

