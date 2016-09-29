require('main.css')

const API_PROXY_URL = 'http://188.166.73.133/wg-api'

const GAME = 'wot'

/*
full API description you can find here:
https://ru.wargaming.net/developers/api_reference

you don't have to pass application_id query param.
It will be passed automatically via proxy server
*/

function loadUsers(username) {
  const url = `${API_PROXY_URL}/${GAME}/account/list/?search=${username}`
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      if (response.status == 'error') {
        console.log('error')
        return Promise.reject(response)
      }
      renderSearchResult(response.data)
      })
  // create request to the url and return a promise
}

function renderSpinner(domNode) {
  // clean all content of passed node and then render element with `spinner` classname
}

function handleUserClick(event) {
  const userId = event.target.id
  const url = `${API_PROXY_URL}/${GAME}/account/info/?account_id=${userId}`
  return fetch(url)
    .then(response => response.json())
    .then(response => renderUserData(userId, response.data))
}

function renderUserData(userId, userData) {
  const userProfile = document.querySelector('.search-results_profile')
  console.log(userData)
  const nickName = userData[userId].nickname
  const stats = userData[userId].statistics.all
  const winsPercent = (stats.wins * 100 / stats.battles).toFixed(1)
  userProfile.innerHTML = `
    <h2>${nickName}</h2>
    <p><strong>Wins</strong> ${winsPercent} %</p>
    <p><strong>Battles</strong> ${stats.battles}</p>
    <p><strong>Banned</strong> ${!!stats.ban_info ? stats.ban_info : 'No'}</p>
  `
}

function renderSearchResult(accounts) {
  const userList = document.querySelector('#user-list')
  userList.innerHTML = accounts.map(({nickname, account_id}) =>
    `<li class="js-user" id="${account_id}">${nickname}</li>`).join('')
  for (let node of document.querySelectorAll('.js-user')) {
    node.addEventListener('click', handleUserClick)
  }
  // render result to the node with class name `search-results`
  // Note! it's already exist. See index.html for more info.
  // Each search result item should be rendered
  // inside node with `search-results_item` class name.
}

function handlerSearchSubmit(event) {
  event.preventDefault();
  const username = document.querySelector('#username')
  loadUsers(username.value)
}

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('#search');
  searchButton.addEventListener('submit', handlerSearchSubmit)
  // add search button click handler here
})
