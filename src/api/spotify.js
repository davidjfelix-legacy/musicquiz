import axios from 'axios'
import config from '../config'

const playlists = {
  items: [
    {
      id: '1234567890',
      images: [],
      name: 'Best Playlist 1',
      tracks: {
        href: 'http://api.spotify.com/v1/users/username/playlists/123456789/tracks',
        total: 30
      },
      type: 'playlist'
    },
    {
      id: '987654321',
      images: [],
      name: 'Best Playlist 2',
      tracks: {
        href: 'http://api.soptify.com/v1/users/username/playlists/987654321/tracks',
        total: 20
      },
      type: 'playlist'
    }
  ],
  limit: 2,
  next: null,
  offset: 0, // href
  previous: null,
  total: 2 // href
}

const albums = {
  albums: [
    {
      id: '123456789',
      images: [],
      name: 'Album Name',
      'release_date': '1998-11-08'
    },
    {
      id: '987654321',
      images: [],
      name: 'Album Name 2',
      'release_date': '2008-10-12'
    }
  ],
  limit: 2,
  next: null,
  offset: 0,
  previous: null,
  total: 2
}

const artists = {
  artists: [
    {
      id: '123456789',
      images: [
        {
          height: 1000,
          url: 'http://i.scdn.co/image/1234567890912381824',
          width: 1000
        }
      ],
      name: 'Artist Name',
      type: 'artist'
    },
    {
      id: '987654321',
      images: [],
      name: 'Artist Name 2',
      type: 'Artist'
    }
  ],
  limit: 2,
  next: null,
  offset: 0,
  previous: null,
  total: 2
}

const tracks = {
  tracks: [
    {
      album: {
        href: 'http://api.spotify.com/artist/artistId'
      },
      id: '12345679',
      'duration_ms': 300000, // ms
      name: 'Track Name',
      type: 'track'
    },
    {
      album: {
        href: 'http://api.spotify.com/artist/artistId'
      },
      id: '987654321',
      'duration_ms': 240000, // ms
      name: 'Track Name 2',
      type: 'track'
    }
  ],
  limit: 2,
  next: null,
  offset: 0,
  previous: null,
  total: 2
}

export async function getCurrentUserPlaylists(limit, offset) {
  // GET /v1/me/playlists
  return Promise.resolve(playlists)
}

export async function getFeaturedPlaylists(limit, offset, country, timestamp) {
  // GET /v1/browse/featured-playlists
  return Promise.resolve(playlists)
}

export async function getAlbum(id) {
  // GET /v1/albums/{id}
  return Promise.resolve(albums.albums[0])
}

export async function getTrack(id) {
  // GET /v1/tracks/{id}
  return Promise.resolve(tracks.tracks[0])
}

export async function search(query, type, limit, offset) {
  // GET /v1/search
  let result
  switch (type) {
    case 'playlists': result = playlists
    case 'artists': result = artists
    case 'albums': result = albums
    case 'tracks': result = tracks
  }
  return Promise.resolve(result)
}

export async function searchForTrack(query, limit, offset) {
  return await search(query, 'track', limit, offset)
}

export async function searchForAlbum(query, limit, offset) {
  return await search(query, 'album', limit, offset)
}
