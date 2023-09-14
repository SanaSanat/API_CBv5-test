import { expect } from 'chai'
import request from 'supertest'
import 'dotenv/config'
import { login } from '../helpers/general-helper'

describe('Authentication', () => {
  describe('Authentication with valid credentials', () => {
    let res
    before(async () => {
      res = await login(process.env.EMAIL, process.env.PASSWORD)
    })

    it('validate status code', async () => {
      await expect(res.statusCode).to.eq(200)
    })

    it('validate response massage', async () => {
      await expect(res.body.message).to.eq('Auth success')
    })

    it('check token exist', async () => {
      await expect(res.body.payload).to.haveOwnProperty('token')
    })
  })
})
