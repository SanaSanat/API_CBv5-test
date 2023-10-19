import { expect } from 'chai'
import { createClient } from '../helpers/client-helper'

describe('Client test', () => {
  describe('Create client', () => {
    let res

    before(async () => {
      res = await createClient()
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
      res = await getAllClient()
    })

    it('verify status code', () => {
      expect(res.statusCode).to.eq(200)
    })

    it('verify response message', async () => {
      expect(res.body.message).to.eq('ClientSearch ok')
    })
  })
})
