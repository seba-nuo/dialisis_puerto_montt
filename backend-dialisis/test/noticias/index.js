const request = require("supertest")

// user mock data
const mockUserData = {
    username: 'tester',
    email: 'tester@strapi.com',
    provider: 'local',
    password: '1234abc',
    confirmed: true,
    blocked: null,
};

describe('GET /noticias', () => {
    it('deberia retornar una lista de noticias', async done => {

        const validData = await strapi.entityValidator.validateEntityCreation(
            strapi.models.noticia,
            {
                "titulo": "string",
                "cuerpo": "string",
                "fecha": "2021-05-24",
                "url": "uid"
            }
          );

        const noticia = await strapi.query('noticia').create(validData);

        console.log(noticia);

        // TODO: revisar como actualizar los permisos del usuario publico

        // await request(strapi.server)
        //         .get('/noticias')
        //         .expect(200)
        done()
    })
})
