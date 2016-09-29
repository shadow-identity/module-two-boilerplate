/* eslint-env mocha */

import { assert } from 'chai'
import sinon from 'sinon'

import { makeRequest } from 'loaders'

describe('loadUsers', function() {
  const fakeData = { foo: 'bar' }
  const url = 'http://foo.bar'

  beforeEach(function () {
    sinon.stub(window, 'fetch')
    window.fetch.returns(Promise.resolve({
      json() {
        return { status: 'ok', data: fakeData }
      }
    }))
  })

  afterEach(function() {
    window.fetch.restore()
  })
  it('should call fetch with url test', function(done) {
    console.log('Im here')
    makeRequest(url).then(function (resp) {
      assert.equal(resp, fakeData)
      assert.equal(
        window.fetch.firstCall.args[0],
        url
      )
    }).then(done, done)


  })
})