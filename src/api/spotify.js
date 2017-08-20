import axios from 'axios'

export async function play({ access_token }) {
  const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: { Authorization: `Bearer ${access_token}` }
  })

  await instance.put('me/player/play', {
    'context_uri': 'spotify:user:1223111115:playlist:5mSMRlwAZVJY2i5UHaEJKf'
  })

  const track = await instance.get('me/player/currently-playing')

  return track.item.name
}

