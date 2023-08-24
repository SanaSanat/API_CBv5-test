import { expect } from 'chai'
console.log('Reading example spec')
describe('firstTest', () => {
  before(() => {
    console.log('Before hook')
  })

  beforeEach(() => {
    console.log('Before each hook')
  })

  it('check sum function', () => {
    let a = 234567996432
    expect(a + a).to.eq(a * 2)
    expect(1 + 1).to.eq(2)
  })
  it('check function', () => {
    expect(2 * 2).to.eq(4)
  })

  after(() => {
    console.log('After hook')
  })

  afterEach(() => {
    console.log('After each hook')
  })
})
console.log('Reading done')

describe('secondTest', () => {
  it('check string length', () => {
    const str = 'Hello'
    const result = str.length
    expect(result).to.eq(5)
  })
})
