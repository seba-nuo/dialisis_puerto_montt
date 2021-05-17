const request = require("supertest")


describe('POST /auth/local/register', () => {
    it('deberia registrar un usuario nuevo', async done => {
        await request(strapi.server)
            .post('/auth/local/register')
            .send({
                username: 'test1',
                email: 'test1@tst.cl',
                password: 'password'
            })
            .expect('Content-Type', /json/)
            .expect(res => res.data.user === 'test1')
        // {
        // })
        // .then(response => {
        //     // Handle success.
        //     console.log('Well done!');
        //     console.log('User profile', response.data.user);
        //     console.log('User token', response.data.jwt);
        // })
        // .catch(error => {
        //     // Handle error.
        //     console.log('An error occurred:', error.response);
        // });
    })
})