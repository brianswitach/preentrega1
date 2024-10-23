const request = require('supertest');
const app = require('../app');

describe('Adoption Routes', () => {
    it('should get all adoptions', async () => {
        const res = await request(app).get('/adoptions');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('adoptions');
    });

    it('should create a new adoption', async () => {
        const res = await request(app)
            .post('/adoptions')
            .send({ userId: '123', petId: '456' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'Adoption created successfully');
    });
});
