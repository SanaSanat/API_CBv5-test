import request from 'supertest'

function createService(vendorId) {
  const vendorPrice = Math.floor(Math.random() * 100)
  const clientPrice = Math.floor(Math.random() * 100)
  return request(process.env.BASE_URL)
    .post('/v5/service')
    .set('Authorization', process.env.TOKEN)
    .send({
      name: 'service-' + Date.now(),
      vendor: vendorId,
      vendorPrice: vendorPrice,
      clientPrice: clientPrice,
    })
}

function getAllService() {
  return request(process.env.BASE_URL)
    .post('/v5/service/search')
    .send({ limit: 100 })
    .set('Authorization', process.env.TOKEN)
}

function getServiceId(serviceId) {
  return request(process.env.BASE_URL)
    .get('/v5/service/' + serviceId)
    .set('Authorization', process.env.TOKEN)
}

function deleteService(serviceId) {
  return request(process.env.BASE_URL)
    .delete('/v5/service/' + serviceId)
    .set('Authorization', process.env.TOKEN)
}

export { createService, getAllService, getServiceId, deleteService }
