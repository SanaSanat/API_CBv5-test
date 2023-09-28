import request from 'supertest'

function login(email, password) {
  return request(process.env.BASE_URL + '/v5')
    .post('/user/login')
    .send({ email, password })
}

function register(firstName, lastName, email, password) {
  return request(process.env.BASE_URL + '/v5')
    .post('/user')
    .send({ firstName, lastName, email, password })
}

export { login, register }
