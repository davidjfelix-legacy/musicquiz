const admin = require('firebase-admin')
const axios = require('axios')
const functions = require('firebase-functions')
const querystring = require('querystring')

const spotify_config = require('./config/spotify')

admin.initializeApp(functions.config().firebase)

exports.spotify_callback = functions.https.onRequest((req, resp) => {
  const client = axios.create({
    timeout: 5000,
    auth: {
      username: spotify_config.CLIENT_ID,
      password: spotify_config.CLIENT_SECRET,
    },
  })

  // FIXME: these must exist, error out here if they don't
  console.log(req.query.code)
  console.log(req.query.state)

  client.post(
    'https://accounts.spotify.com/api/token',
    querystring.stringify({
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: 'https://us-central1-musicquiz-d798a.cloudfunctions.net/spotify_callback'
    }))
    .then((spotify_resp) => {
      console.log(spotify_resp)
      admin.database().ref(`users/${req.query.state}/token`).set(spotify_resp.data)
      resp.status(200).end()
    })
    .catch((error) => {
      console.log(error.request)
      console.log(error.response)
      console.log(error.response.data)
      resp.status(500).end()
    })
})

exports.onGameCreatedCreateShortcode = functions.database.ref('games/{pushId}')
  .onCreate((event => {
    const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const date = new Date()

    const dayTimeInMills = date.getMilliseconds() + (1000 * (
      date.getSeconds() + (60 * (
        date.getMinutes() + (60 * (
          date.getHours()
        ))
      ))
    ))

    const maxDayTimeInMills =  86400000 // 24 * 60 * 60 * 1000
    const maxFourDigitB26 = 456976 // 26^4
    const decimalFourDigitB26 = (dayTimeInMills/maxDayTimeInMills) * maxFourDigitB26

    const joinCode = ALPHA.charAt(Math.floor(decimalFourDigitB26 / 17576) % 26) +
      ALPHA.charAt(Math.floor(decimalFourDigitB26 / 676) % 26) +
      ALPHA.charAt(Math.floor(decimalFourDigitB26 / 26) % 26) +
      ALPHA.charAt(decimalFourDigitB26 % 26)

    return event.data.ref.child('join_code').set(joinCode)
      .then(
        admin.database().ref(`games-by-joincode/${joinCode}`).set(event.params.pushId)
      )
  }))
