const admin = require('firebase-admin')
const axios = require('axios')
const functions = require('firebase-functions')
const querystring = require('querystring')

const spotify_config = require('./config/spotify')

admin.initializeApp(functions.config().firebase)

exports.spotify_callback = functions.https.onRequest((req, resp) => {
  const client = axios.create({
    baseURL: 'https://accounts.spotify.com/api/token',
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
    '/',
    querystring.stringify({
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: 'https%3A%2F%2Fus-central1-musicquiz-d798a.cloudfunctions.net%2Fspotify_callback'
    }))
    .then((spotify_resp) => {
      console.log(spotify_resp)
      admin.database().ref(`/users/${req.query.state}/token`).set(spotify_resp.data)
      resp.status(200).end()
    })
    .catch((error) => {
      console.log(error)
      resp.status(500).end()
    })
})
