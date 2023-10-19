import { expect } from 'chai'
import * as vendorHelper from '../helpers/vendor-helper'

describe('Vendor tests', () => {
  let res
  before(async () => {
    res = await vendorHelper.createVendor()
  })
  describe('Create vendor', async () => {
    it('Verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('Verify response message', () => {
      expect(res.body.message).to.eq('Vendor created')
    })

    it('Verify payload is not to be empty', () => {
      expect(res.body.payload).not.to.be.empty
    })

    it('Verify payload is string', () => {
      expect(res.body.payload).to.be.a('string')
    })
  })

  describe('Get all vendors', () => {
    let res
    before(async () => {
      res = await vendorHelper.getAll()
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('Verify response message', () => {
      expect(res.body.message).to.eq('VendorSearch ok')
    })
  })

  describe('Get vendor by id', () => {
    let res
    let vendorId

    before(async () => {
      vendorId = (await vendorHelper.createVendor()).body.payload
      res = await vendorHelper.getId(vendorId)
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('verify response message', async () => {
      expect(res.body.message).to.eq('Get Vendor by id ok')
    })
  })

  describe('Delete vendor', () => {
    let res, vendorId

    before(async () => {
      vendorId = (await vendorHelper.createVendor()).body.payload
      res = await vendorHelper.deleteVendor(vendorId)
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('verify response message', async () => {
      expect(res.body.message).to.eq('Vendor deleted')
    })
  })
})
