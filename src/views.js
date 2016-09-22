import { handleUserClick } from './handlers'

export function renderUser({ nickname, accountId }) {
  return `
    <div class="search-results_item js-user" data-id="${accountId}">${nickname}</div>
  `
}

export function renderSearchResult(accounts) {
  const node = document.querySelector('#search-results')
  node.innerHTML = accounts.map(renderUser).join('')
  for (const nodeJSUser of document.querySelectorAll('.js-user')) {
    nodeJSUser.addEventListener('click', handleUserClick)
  }
  // render result to the node with class name `search-results`
  // Note! it's already exist. See index.html for more info.
  // Each search result item should be rendered
  // inside node with `search-results_item` class name.
}


export function renderUserProfile({ nickname, globalRating, statistics }) {
  const { wins, battles } = statistics.all
  const winsPercent = ((wins / battles) * 100).toFixed(2)

  document.querySelector('#profile').innerHTML = `
    <h1>${nickname} <sup>${globalRating}</sup></h1>
    <div>
      <p>Battles: ${battles}</p>
      <p>Wins percent: ${winsPercent}%</p>
    </div>
  `
}
