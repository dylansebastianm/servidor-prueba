const server = require("./src/app.js");
const { conn } = require('./src/db.js');
const {
  getGenresDataApi, 
  getMoviesDataApi, 
  getMoviesTopRatedDataApi} = require('./src/controllers/apiInfo.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    await getGenresDataApi()
    await getMoviesDataApi()
    await getMoviesTopRatedDataApi()
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
