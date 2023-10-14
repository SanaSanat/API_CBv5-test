import { login, register } from '../helpers/general-helper'
import { expect } from 'chai'

const chance = require('chance').Chance()

describe('Verify email and password', () => {
  let res
  it('email space trimmed', async () => {
    const randomEmail = '  user_' + Date.now() + '@pirate.com'
    await register(
      chance.first(),
      chance.last(),
      randomEmail,
      process.env.PASSWORD
    )
    res = await login(randomEmail, process.env.PASSWORD)

    expect(res.statusCode).to.eq(200)
    const email = res.body.payload.user.email
    expect(email).to.eq(email.trim())

    //console.log(res.body)
  })
  it('password space trimmed', async () => {
    const randomEmail = '  user_' + Date.now() + '@pirate.com'
    await register(
      chance.first(),
      chance.last(),
      randomEmail,
      process.env.PASSWORD
    )
    res = await login(randomEmail, '   password')
    expect(res.statusCode).to.eq(400)

    //const password = res.body.payload.user.id
    expect(res.body.payload.user.id).to.eq('false')
    // console.log(res.body)
  })
})
