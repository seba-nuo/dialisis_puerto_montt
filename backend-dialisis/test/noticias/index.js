const request = require("supertest")

it('deberia retornar todas las noticias', async done => {
    await request(strapi.server)
        .get("/noticias")
        .expect(200)
        .expect('Content-Type', /json/)
})