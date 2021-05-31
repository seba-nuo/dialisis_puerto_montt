const request = require("supertest")
const { grantPrivilege } = require("./../helpers/strapi");


beforeAll(async () => {
    await grantPrivilege(2, "permissions.application.controllers.noticias.index");
  });

// user mock data
const mockUserData = {
    username: 'tester',
    email: 'tester@strapi.com',
    provider: 'local',
    password: '1234abc',
    confirmed: true,
    blocked: null,
};

describe('POST /auth/local/', () => {

    it('deberia retornar un token JWT', async done => {

        // inserta usuario en la base de datos
        await strapi.plugins['users-permissions'].services.user.add({
            ...mockUserData,
        });

        await request(strapi.server)
            .post('/auth/local')
            .set('accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send({
                identifier: mockUserData.email,
                password: mockUserData.password,
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .then(data => {
                expect(data.body.jwt).toBeDefined();
            });

        done();
    })
})

describe('GET /users/me', () => {
    it('debería retornar los datos del usuario logeado', async done => {

        const defaultRole = await strapi.query('role', 'users-permissions').findOne({}, []);

        const role = defaultRole ? defaultRole.id : null;

        // inserta usuario en la base de datos, el rol es necesario para luego obtener el token
        // https://strapi.io/documentation/developer-docs/latest/guides/unit-testing.html#testing-auth-endpoint-controller
        
        const user = await strapi.plugins['users-permissions'].services.user.add({
            ...mockUserData,
            username: 'tester2',
            email: 'tester2@strapi.com',
            role,
        });

        // obtiene el token jwt del usuario
        const jwt = await strapi.plugins['users-permissions'].services.jwt.issue({
            id: user.id,
        });

        await request(strapi.server) // app server is an instance of Class: http.Server
            .get('/users/me')
            .set('accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + jwt)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(data => {
                expect(data.body).toBeDefined();
                expect(data.body.id).toBe(user.id);
                expect(data.body.username).toBe(user.username);
                expect(data.body.email).toBe(user.email);
            });

        done();
    });
})