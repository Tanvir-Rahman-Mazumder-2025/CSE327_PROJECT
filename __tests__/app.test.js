import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';
import User from '../models/user.js';

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/Boibazar');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Register', () => {
  it('should redirect after successful registration', async () => {
    const res = await request(app)
      .post('/register')
      .send({ username: 'testuser', email: 'test@gmail.com', password: '123456' });
    console.log(res.headers);
    expect(res.statusCode).toBe(302);
    expect(res.headers.location).toBe('/login?registered=true');
  });

});
