import { expect } from 'chai'
import * as orderHelper from '../helpers/order-helper'
import * as vendorHelper from '../helpers/vendor-helper'
import * as serviceHelper from '../helpers/service-helper'
import * as clientHelper from '../helpers/client-helper'

describe('Order tests', () => {
  describe('Create order', () => {
    let res, serviceId, clientId

    before(async () => {
      clientId = (await clientHelper.create()).body.payload
      let vendorId = (await vendorHelper.createVendor()).body.payload
      serviceId = (await serviceHelper.createService(vendorId)).body.payload

      res = await orderHelper.createOrder(clientId, serviceId)
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('Verify response message', () => {
      expect(res.body.message).to.eq('Order created')
    })
  })

  describe('Get all orders', () => {
    let res

    before(async () => {
      res = await orderHelper.getAllOrder()
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('verify response message', () => {
      expect(res.body.message).to.eq('OrderSearch ok')
    })
  })

  describe('Get Order By ID', () => {
    let res, clientId, serviceId, orderId

    before(async () => {
      clientId = (await clientHelper.create()).body.payload
      let vendorId = (await vendorHelper.createVendor()).body.payload
      serviceId = (await serviceHelper.createService(vendorId)).body.payload
      orderId = (await orderHelper.createOrder(clientId, serviceId)).body
        .payload
      res = await orderHelper.getOrderId(orderId)
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })
    it('verify response message', () => {
      expect(res.body.message).to.eq('Get Order by id ok')
    })
  })

  describe('Delete Order', () => {
    let res, clientId, serviceId, orderId

    before(async () => {
      clientId = (await clientHelper.create()).body.payload
      let vendorId = (await vendorHelper.createVendor()).body.payload
      serviceId = (await serviceHelper.createService(vendorId)).body.payload
      orderId = (await orderHelper.createOrder(clientId, serviceId)).body
        .payload
      res = await orderHelper.deleteOrder(orderId)
    })
    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })
    it('verify response message', () => {
      expect(res.body.message).to.eq('Order deleted')
    })
  })
})
