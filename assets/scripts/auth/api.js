<<<<<<< HEAD
'use strict'

const config = require('../config.js')

const signUp = data => {
=======
/*
const config = require('../config.js')

const SignUp = data => {
>>>>>>> parent of 5faf469... Revert "Commit with Joel's code"
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

<<<<<<< HEAD
module.exports = {
  signUp
}
=======
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

*/
>>>>>>> parent of 5faf469... Revert "Commit with Joel's code"
