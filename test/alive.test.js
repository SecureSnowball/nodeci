const supertest = require('supertest');
const { assert, expect } = require('chai');
const app = require('../src/server');

const request = supertest(app);
describe('GET /health', () => {
  it('Shoud return ok and 200', async () => {
    const resposne = await request.get('/health');

    assert.equal(resposne.status, 200);
    assert.equal(resposne.body.status, 'Ok');
    expect(resposne.body.status).to.eql('Ok');
  });
});
