// import 'bootstrap/dist/css/bootstrap.css'
import { handleSearchClick } from './handlers'
import toggleSpinner from './helpers'

// import './main.css'

/*
full API description you can find here:
https://ru.wargaming.net/developers/api_reference

you don't have to pass application_id query param.
It will be passed automatically via proxy server
*/

document.addEventListener('DOMContentLoaded', () => {
  // add search button click handler here
  const buttonNode = document.querySelector('#search')
  buttonNode.addEventListener('click', handleSearchClick)
})

export function testFunc() {
  toggleSpinner()
}