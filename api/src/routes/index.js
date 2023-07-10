const { Router } = require('express');


//REQUIRE GET
const getMovies = require("../controllers/Get/geMovies")
const getMoviesTopRated = require("../controllers/Get/getMoviesTop")
const getGenres = require("../controllers/Get/getGenres")




const router = Router();

//GET
router.use("/", getMovies)
router.use("/top", getMoviesTopRated)
router.use("/genres", getGenres)


module.exports = router;
