import { expect } from 'chai'
import * as serviceHelper from '../helpers/service-helper'
import * as vendorHelper from '../helpers/vendor-helper'

describe('Service tests', () => {
  describe('Create a service', async () => {
    let res, vendorId

    before(async () => {
      vendorId = (await vendorHelper.createVendor()).body.payload
      res = await serviceHelper.createService(vendorId)
    })
    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('Verify response message', () => {
      expect(res.body.message).to.eq('Service created')
    })
  })

  describe('Get all a service', async () => {
    let res

    before(async () => {
      res = await serviceHelper.getAllService()
    })
    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })
    it('Verify response message', () => {
      expect(res.body.message).to.eq('Service Search ok')
    })
  })

  describe('Get service by Id', async () => {
    let res, vendorId
    let serviceId

    before(async () => {
      vendorId = (await vendorHelper.createVendor()).body.payload
      serviceId = (await serviceHelper.createService(vendorId)).body.payload
      res = await serviceHelper.getServiceId(serviceId)
    })
    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })
    it('Verify response message', () => {
      expect(res.body.message).to.eq('Get Service by id ok')
    })
  })

  describe('Delete service', async () => {
    let res, vendorId
    let serviceId

    before(async () => {
      vendorId = (await vendorHelper.createVendor()).body.payload
      serviceId = (await serviceHelper.createService(vendorId)).body.payload
      res = await serviceHelper.deleteService(serviceId)
    })
    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })
    it('Verify response message', () => {
      expect(res.body.message).to.eq('Service deleted')
    })
  })
})
