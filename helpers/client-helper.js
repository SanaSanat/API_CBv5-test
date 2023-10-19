import request from 'supertest'
const chance = require('chance').Chance()

function create(name = chance.first(), phone = Date.now()) {
  return request(process.env.BASE_URL)
    .post('/v5/client')
    .send({ name, phone })
    .set('Authorization', process.env.TOKEN)
}

function getAll() {
  return request(process.env.BASE_URL)
    .post('/v5/client/search')
    .send({ limit: 100 })
    .set('Authorization', process.env.TOKEN)
}

function getAllId(clientId) {
  return request(process.env.BASE_URL)
    .get('/v5/client/' + clientId)
    .set('Authorization', process.env.TOKEN)
}
function deleteClient(clientId) {
  return request(process.env.BASE_URL)
    .delete('/v5/client/' + clientId)
    .set('Authorization', process.env.TOKEN)
}

export { create, getAll, getAllId, deleteClient }
