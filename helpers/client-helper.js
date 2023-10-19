import request from 'supertest'
const chance = require('chance').Chance()

function createClient(name = chance.first(), phone = Date.now()) {
  return request(process.env.BASE_URL)
    .post('/v5/client')
    .send({ name, phone })
    .set('Authorization', process.env.TOKEN)
}

function getAllClient() {
  return request(process.env.BASE_URL)
    .post('/v5/client/search')
    .send({ limit: 100 })
    .set('Authorization', process.env.TOKEN)
}

export { createClient, getAllClient }
