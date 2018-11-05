'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

/* const gameBoard = ['', '', '', '', '', '', '', '', '']
  for (i = 0; i < gameBoard.length; i++) {
    return

playerX = 'x'
playerO = 'o'
}

})

currentMove

*/

const authEvents = require('./auth/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
})
