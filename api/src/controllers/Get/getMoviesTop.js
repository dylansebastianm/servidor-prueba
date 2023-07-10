const { Router } = require('express');

const { MoviesTop, Genres} = require("../../db")


const router = Router();

router.get('/', async (req, res) => {

    try {
        const allMoviesTopRated = await MoviesTop.findAll({
             include: [{
                model: Genres,
                attributes: ["id", "name"],
                through: { attributes: [] } 

              }] 
        })
        res.status(200).json(allMoviesTopRated)
       
    } catch (error) {
        res.status(404)
    }
})

module.exports = router;

