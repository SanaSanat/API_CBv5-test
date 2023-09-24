import { expect } from 'chai'
import { register } from '../helpers/general-helper'

const chance = require('chance').Chance()
//import 'dotenv/config'

describe('Registration', () => {
  describe('Create a user with valid credentials', () => {
    let res
    const newEmail = 'user_' + Date.now() + '@pirate.com'

    before(async () => {
      res = await register(
        chance.first(),
        chance.last(),
        newEmail,
        process.env.PASSWORD
      )
    })
    it('verify response status code', async () => {
      expect(res.statusCode).to.eq(201)
    })
    it('verify response message', async () => {
      expect(res.body.message).contain('created successfully')
    })
  })

  describe('Create a user with invalid firstName, lastName', () => {
    let res
    const newEmail = 'user_' + Date.now() + '@pirate.com'

    before(async () => {
      res = await register('', '', newEmail, process.env.PASSWORD)
    })

    it('verify status code', async () => {
      await expect(res.statusCode).to.eq(404)
    })
    it('verify response message', async () => {
      await expect(res.body.message).contain('not created')
    })
  })

  describe('Create a user with existing email', () => {
    let res
    before(async () => {
      res = await register(
        chance.first(),
        chance.last(),
        process.env.EMAIL,
        process.env.PASSWORD
      )
    })

    it('verify status code', async () => {
      await expect(res.statusCode).to.eq(409)
    })
    it('verify response message', async () => {
      await expect(res.body.message).to.eq('User with this e-mail exists')
    })
  })

  describe('Create a user with invalid password', () => {
    let res
    const newEmail = 'user_' + Date.now() + '@pirate.com'

    before(async () => {
      res = await register(chance.first(), chance.last(), newEmail, '')
    })

    it('verify status code', async () => {
      await expect(res.statusCode).to.eq(400)
    })
    it('verify response message', async () => {
      await expect(res.body.message).to.eq('Wrong password format')
    })
  })
})
