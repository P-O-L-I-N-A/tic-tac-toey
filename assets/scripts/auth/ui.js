'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = error => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#playerName').text(data.user.email)
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
  $('#main').removeClass('d-none')
}

const signInFailure = error => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
}

const signOutFailure = error => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const newGame = game => {
  console.log('New Game', game)
  store.game = game.game
  gameBoard = ['', '', '', '', '', '', '', '', '']
  gameWon = false
  currentMove = 1
  $('#board div').text('')
}

let gameBoard = ['', '', '', '', '', '', '', '', '']
const playerX = 'X'
const playerO = 'O'
let currentMove = 1
let gameWon = false
const winnerContainer = $('.winner')
const reset = $('.reset')

function declareWinner (winner) {
  console.log('winner:', winner)
  gameWon = true
  winnerContainer.css('display', 'block')
  reset.css('display', 'block')
  winner = winner === playerX ? 'x' : 'o'
  winnerContainer.html(winner + ' wins!')
}

const boxClick = () => {
  // console.log('BoxClicked')
  if (gameWon) {
    return
  }
  let currentPlayer
  if (event.target.innerHTML === '') {
    // if player_o clicks check if they are a winner, if player_x clicks do same
    if (currentMove % 2 === 1) {
      currentPlayer = playerX
      event.target.innerHTML = playerX
      gameBoard = $('.box').map((i, box) => box.innerHTML).get()
      currentMove++
    } else {
      currentPlayer = playerO
      event.target.innerHTML = playerO
      gameBoard = $('.box').map((i, box) => box.innerHTML).get()
      currentMove++
    }
    if (currentPlayer === playerX) {
      $('.player_o').hide()
      $('.player_x').show()
    } else {
      $('.player_x').hide()
      $('.player_o').show()
    }
  }

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
    const found = winCombos.find(w => {
      return gameBoard[w[0]] === player && gameBoard[w[1]] === player && gameBoard[w[2]] === player
    })
    return found !== undefined
  }
  const over = checkForWinner(currentPlayer)
  if (over) {
    declareWinner(currentPlayer)
  }
  return {cell: {index: event.target.id - 1, value: currentPlayer}, over}
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGame,
  boxClick
}
