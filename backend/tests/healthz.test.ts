import request from 'supertest';
import app from '../src/app';

describe('GET /healthz', () => {
  it('responds with status ok', async () => {
    const res = await request(app).get('/healthz');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
