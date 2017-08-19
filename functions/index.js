const functions = require('firebase-functions')

exports.spotify_callback = functions.https.onRequest((req, resp) => {
  resp.write(req.query.code)
})
