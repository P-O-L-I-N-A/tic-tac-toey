'use strict'

const authEvents = require('./auth/events.js')

$(() => {
  $('#sign_up').on('submit', authEvents.onSignUp)
  $('#sign_in').on('submit', authEvents.onSignIn)
  $('#change_password').on('submit', authEvents.onChangePassword)
  $('#sign_out').on('submit', authEvents.onSignOut)
  $('#new_game').on('submit', authEvents.onNewGame)
})

$(() => {
  let gameBoard = ['', '', '', '', '', '', '', '', '']
  const playerX = 'X'
  const playerO = 'O'

  let currentMove = 1
  let movesCompleted = 0
  let gameWon = false

  const box = $('.box')
  const winnerContainer = $('.winner')
  const reset = $('.reset')

  // const makeMove = function (e) {
  // code here
  // }
  // if player_o clicks check if they are a winner, if player_x clicks do same
  box.on('click', () => {
    if (gameWon) {
      return
    }
    let currentPlayer
    movesCompleted++
    if (event.target.innerHTML === '') {
      if (currentMove % 2 === 1) {
        currentPlayer = playerX
        event.target.innerHTML = playerX
        gameBoard = $('.box').map((i, box) => box.innerHTML).get()
        // console.log(gameBoard)
        currentMove++
      } else {
        currentPlayer = playerO
        event.target.innerHTML = playerO
        gameBoard = $('.box').map((i, box) => box.innerHTML).get()
        // console.log(gameBoard)
        currentMove++
      }
    }

    // reset.on('click', function (e) {
    //   const moves = Array.prototype.slice.call($('.inner'))
    //   moves.map((m) => {
    //     m.innerHTML = ''
    //   })
    //   winnerContainer.html('')
    //   winnerContainer.css('display', 'none')
    //   currentMove = 1
    //   movesCompleted = 0
    // })

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

    function checkForWinner (player) {
      console.log(gameBoard)
      return gameBoard[0] === player
      // const moves = Array.prototype.slice.call($('.box'))
      // const results = moves.map(function (box) {
      //   return box.innerHTML
      // })

      // return winCombos.find(function (combo) {
      //   if (gameBoard[combo[0]] !== '' &&
      // gameBoard[combo[1]] !== '' &&
      // gameBoard[combo[2]] !== '' &&
      // gameBoard[combo[0]] === gameBoard[combo[1]] && gameBoard[combo[1]] ===
      // gameBoard[combo[2]]) {
      //     return true
      //     console.log('true')
      //   } else {
      //     return false
      //     console.log('false')
      //   }
      // })
    }

    // var found = array.find(function(element) {
    //   return element > 20;
    // });

    if (checkForWinner(currentPlayer)) {
      declareWinner(currentPlayer)
    }
  })

  function declareWinner (winner) {
    console.log('winner:', winner)
    gameWon = true
    winnerContainer.css('display', 'block')
    reset.css('display', 'block')
    winner = winner === playerX ? 'x' : 'o'
    winnerContainer.html(winner + ' wins!')
  }
})
