'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(() =>
      api.newGame()
        .then(ui.newGame)
        .catch(ui.signInFailure) // TODO: change later
    )
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = event => {
  console.log('new game')
  event.preventDefault()
  api.newGame()
    .then(ui.newGame)
    .catch(ui.signInFailure) // TODO: change later
}

const onBoxClick = event => {
  event.preventDefault()
  const game = ui.boxClick(event)
  console.log('move', game)
  api.saveGame({game})
    .then(data => { console.log('UpdatedGame', data) })
    .catch(ui.signInFailure) // TODO: change later
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onBoxClick
}
