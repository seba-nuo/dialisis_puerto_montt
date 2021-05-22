const request = require("supertest")


describe('POST /auth/local/register', () => {
    it('deberia registrar un usuario nuevo', done => {
        request(strapi.server)
            .post('/auth/local/register')
            .send({
                username: 'test',
                email: 'test@tst.cl',
                password: 'password'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
        
        //     console.log('User profile', response.data.user);
        //     console.log('User token', response.data.jwt);
    })
})