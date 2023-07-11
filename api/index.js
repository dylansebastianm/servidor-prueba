const server = require("./src/app.js");
const { conn } = require('./src/db.js');
const {
  getGenresDataApi, 
  getMoviesDataApi, 
  getMoviesTopRatedDataApi} = require('./src/controllers/apiInfo.js');
  const port = process.env.PORT || 3001



// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, async () => {
    await getGenresDataApi()
    await getMoviesDataApi()
    await getMoviesTopRatedDataApi()
    console.log(`Server raised in port ${port}`); // eslint-disable-line no-console
  });
});
