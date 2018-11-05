'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
}

const onSignOut = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
