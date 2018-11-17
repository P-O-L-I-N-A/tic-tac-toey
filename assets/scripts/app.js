'use strict'

const authEvents = require('./auth/events.js')

$(() => {
  $('#sign_up').on('submit', authEvents.onSignUp)
  $('#sign_in').on('submit', authEvents.onSignIn)
  $('#change_password').on('submit', authEvents.onChangePassword)
  $('#sign_out').on('submit', authEvents.onSignOut)
  $('#new_game').on('click', authEvents.onNewGame)
})

$(() => {
  const box = $('.box')
  box.on('click', authEvents.onBoxClick)
})
