import request from 'supertest'

function createOrder(clientId, serviceId) {
  const vendorPrice = Math.floor(Math.random() * 100)
  const clientPrice = Math.floor(Math.random() * 100)
  const clientPaid = Math.floor(Math.random() * 100)
  const vendorPaid = Math.floor(Math.random() * 100)
  return request(process.env.BASE_URL)
    .post('/v5/order')
    .set('Authorization', process.env.TOKEN)
    .send({
      name: 'order-' + Date.now(),
      client: clientId,
      service: serviceId,
      vendorPrice: vendorPrice,
      vendorPaid: vendorPaid,
      clientPrice: clientPrice,
      clientPaid: clientPaid,
    })
}
function getAllOrder() {
  return request(process.env.BASE_URL)
    .post('/v5/order/search')
    .set('Authorization', process.env.TOKEN)
}

function getOrderId(orderId) {
  return request(process.env.BASE_URL)
    .get('/v5/order/' + orderId)
    .set('Authorization', process.env.TOKEN)
}
function deleteOrder(orderId) {
  return request(process.env.BASE_URL)
    .delete('/v5/order/' + orderId)
    .set('Authorization', process.env.TOKEN)
}

export { createOrder, getAllOrder, getOrderId, deleteOrder }
