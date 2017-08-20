import database from '../database.js'

export async function startGame(gameId) {
  return await database.ref(`games/${gameId}/is_started`).set(true)
}
