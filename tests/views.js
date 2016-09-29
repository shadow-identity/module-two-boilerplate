/* eslint-env mocha */

import { assert } from 'chai'

import { renderUser } from 'views'

describe('Test renderUser', function() {

  const accountData = {
    accountId: 42,
    nickname: 'foo'
  }

  before(function () {
    document.body.innerHTML = renderUser(accountData)
  })

  it('should contain accountID and nickname', function() {
    const userNode = document.querySelector('.js-user')
    assert.equal(userNode.innerHTML.trim(), accountData.nickname)
    assert.equal(userNode.getAttribute('data-id'), accountData.accountId)
  })

  it('should appropriate style', function() {
    assert.isOk(document.querySelector('.search-results_item'))
  })
})