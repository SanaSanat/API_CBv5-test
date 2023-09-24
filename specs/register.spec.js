import { expect } from 'chai'
import { register } from '../helpers/general-helper'
const chance = require('chance').Chance()
//import 'dotenv/config'

describe('Create a user with valid credentials', () => {
  let res
  const newEmail = 'user_' + Date.now() + '@pirate.com'
  console.log(newEmail)
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
