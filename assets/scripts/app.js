'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
//authEvents = require('./auth/events.js')

//$(() => {
//  $('#sign_up').on('submit', authEvents.onSignUp)
//  $('#sign_in').on('submit', authEvents.onSignIn)
//  $('#sign_out').on('submit'), authEvents.onSignOut);
//})

//const store = require('../store.js')

// const gameBoard = ['','','','','','','','','']

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const authEvents = require('./auth/events.js')
//
// $(() => {
//   $('#sign-up').on('submit', authEvents.onSignUp)
//   $('#sign-in').on('submit', authEvents.onSignIn)
//   $('#sign-out').on('submit', authEvents.onSignOut)
// })

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
<<<<<<< HEAD
  $('#sign-up').on('submit', authEvents.onSignUp)
=======
  // your JS code goes here
  const playerX = 'X'
  const playerO = 'O'

  let currentMove = 1
  let movesCompleted = 0

  const box = $('.box')
  const winnerContainer = $('.winner')
  const reset = $('.reset')
  //   /const makeMove = function (e) {
  //     //code here
  // }

  box.on('click', function () {
    movesCompleted++
    // finding odd numbers
// if (event.target.innerHTML === '') { BEGIN FUNCTION FOR SECOND CLICK
    if (currentMove % 2 === 1) {
      event.target.innerHTML = playerX
      // event.target.style.color = 'red'
      currentMove++
    } else {
      event.target.innerHTML = playerO
      // event.target.style.color = 'green'
      currentMove--
    }
    // $(this).off('click') TRIED USING .off

    // function boxClick(inner) {
    // if (inner.innerHTML === "X" || inner.innerHTML === "O") {
    //     return;
    // }

    if (checkForWinner()) {
      // if currentMove is equal to 1, player_o wins (because opposite), else player_x wins.
      const theWinner = currentMove === 1 ? playerO : playerX
      declareWinner(theWinner)
    }
    // } END FUNCTION TO PREVENT SECOND CLICK
  })

  reset.on('click', function (e) {
    const moves = Array.prototype.slice.call($('.inner'))
    moves.map((m) => {
      m.innerHTML = ''
    })
    winnerContainer.html('')
    winnerContainer.css('display', 'none')
    currentMove = 1
    movesCompleted = 0
  })

  function checkForWinner () {
    if (movesCompleted > 4) {
      const moves = Array.prototype.slice.call($('.inner'))
      const results = moves.map(function (box) {
        return box.innerHTML
      })
      const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      return winCombos.find(function (combo) {
        if (results[combo[0]] !== '' &&
        results[combo[1]] !== '' &&
        results[combo[2]] !== '' &&
        results[combo[0]] === results[combo[1]] && results[combo[1]] ===
        results[combo[2]]) {
          return true
        } else {
          return false
        }
      })
    }
  }
  function declareWinner (winner) {
    winnerContainer.css('display', 'block')
    reset.css('display', 'block')
    winner = winner === playerX ? 'x' : 'o'
    winnerContainer.html(winner + ' wins!')
  }
>>>>>>> parent of 5faf469... Revert "Commit with Joel's code"
})
