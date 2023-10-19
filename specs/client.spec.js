import { expect } from 'chai'
import * as clientHelper from '../helpers/client-helper'

describe('Client test', () => {
  describe('Create client', () => {
    let res

    before(async () => {
      res = await clientHelper.create()
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('verify response message', async () => {
      expect(res.body.message).to.eq('Client created')
    })
  })

  describe('Get all clients', () => {
    let res

    before(async () => {
      res = await clientHelper.getAll()
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('verify response message', async () => {
      expect(res.body.message).to.eq('ClientSearch ok')
    })
  })

  describe('Get client by id', () => {
    let res
    let clientId

    before(async () => {
      clientId = (await clientHelper.create()).body.payload
      res = await clientHelper.getAllId(clientId)
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('verify response message', async () => {
      expect(res.body.message).to.eq('Get Client by id ok')
    })
  })

  describe('Delete client', () => {
    let res
    let clientId

    before(async () => {
      clientId = (await clientHelper.create()).body.payload
      res = await clientHelper.deleteClient(clientId)
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('verify response message', async () => {
      expect(res.body.message).to.eq('Client deleted')
    })
  })
})
