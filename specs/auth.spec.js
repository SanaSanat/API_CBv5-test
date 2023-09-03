import { expect } from 'chai'
import request from 'supertest'

describe('Authentication', () => {
  describe('Authentication with valid credentials', () => {
    it('validate status code', async () => {
      let res
      res = await request('https://clientbase-server.herokuapp.com/v5')
        .post('/user/login')
        .send({ email: 'businesss@owner.com', password: '123123' })

      //console.log(res.statusCode)

      expect(res.statusCode).to.eq(200)
    })

    it('validate response massage', async () => {
      let res
      res = await request('https://clientbase-server.herokuapp.com/v5')
        .post('/user/login')
        .send({ email: 'businesss@owner.com', password: '123123' })

      expect(res.body.message).to.eq('Auth success')
    })

    it('check token exist', async () => {
      let res
      res = await request('https://clientbase-server.herokuapp.com/v5')
        .post('/user/login')
        .send({ email: 'businesss@owner.com', password: '123123' })

      expect(res.body.payload).to.haveOwnProperty('token')
    })
  })
})
