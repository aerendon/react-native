const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=5c468f8b5b4f526bea66c0a25eea9f98&format=json'

function getArtists(params) {
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
      return {
        name: artist.name,
        image: artist.image[3]['#text'],
        likes: 200,
        comments: 140
      }
    }))
}

export { getArtists }