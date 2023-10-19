import request from 'supertest'
const chance = require('chance').Chance()

function createVendor() {
  return request(process.env.BASE_URL)
    .post('/v5/vendor')
    .set('Authorization', process.env.TOKEN)
    .send({
      name: 'Vendor-' + Date.now(),
      phone: Date.now(),
    })
}
function getAll() {
  return request(process.env.BASE_URL)
    .post('/v5/vendor/search')
    .set('Authorization', process.env.TOKEN)
}
function getId(vendorId) {
  return request(process.env.BASE_URL)
    .get('/v5/vendor/' + vendorId)
    .set('Authorization', process.env.TOKEN)
}
function deleteVendor(vendorId) {
  return request(process.env.BASE_URL)
    .delete('/v5/vendor/' + vendorId)
    .set('Authorization', process.env.TOKEN)
}

export { createVendor, getAll, getId, deleteVendor }
