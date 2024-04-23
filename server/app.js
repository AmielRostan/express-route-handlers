// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

// Your code here

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

app.get('/artists', (req, res) => {
  const artists = getAllArtists();
  res.send(artists);
});

app.post('/artists', (req, res) => {
  const data = req.body;
  const artist = addArtist(data);

  res.status(201).send(artist);
});

app.get('/artists/latest', (req, res) => {
  const artist = getLatestArtist();

  res.send(artist);
});

app.get('/artist/latest/albums', (req, res) => {
  const albums = getAlbumsForLatestArtist();

  res.send(albums);
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
