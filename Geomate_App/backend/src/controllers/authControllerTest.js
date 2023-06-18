// authController.test.js
const request = require('supertest');
const app = require('../app');
const User = require('../models/user');

describe('POST /login', () => {
    it('responds with a token when given valid credentials', async () => {
    const user = await User.create({ username: 'test', password: 'password' });

    const response = await request(app)
        .post('/login')
        .send({ username: 'test', password: 'password' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    });
});
