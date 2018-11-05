'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/auth/app.js')

// styles
require('./assets/styles/index.scss')

const config = require('../config.js')
const store = require('../store.js')

const SignUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const SignIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const SignOut = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    header: {Athorization: 'Token token=' + store.user.token},
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
