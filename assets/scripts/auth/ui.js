'use strict'

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  $('#message').text('Signed in successfully')
  console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  console.log('signOutSuccess ran.')
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  console.error('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
