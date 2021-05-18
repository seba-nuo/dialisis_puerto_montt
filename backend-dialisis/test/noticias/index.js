const request = require("supertest")


describe('POST /auth/local/register', () => {
    it('deberia registrar un usuario nuevo', async done => {
        await request(strapi.server)
            .post('/auth/local/register')
            .send({
                username: 'test',
                email: 'test@tst.cl',
                password: 'password'
            })
            .expect('Content-Type', /json/)
            // .expect(200)
        
        //     console.log('User profile', response.data.user);
        //     console.log('User token', response.data.jwt);
    })
})