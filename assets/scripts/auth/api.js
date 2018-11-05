'use strict'

const config = require('../config.js')
const store = require('../store')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
