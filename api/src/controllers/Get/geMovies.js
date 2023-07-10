const { Router } = require('express');

const { Movies, Genres} = require("../../db")


const router = Router();

router.get('/', async (req, res) => {

    try {
        const allMovies = await Movies.findAll({
             include: [{
                model: Genres,
                attributes: ["id", "name"],
                through: { attributes: [] } 

              }] 
        })
        res.status(200).json(allMovies)
       
    } catch (error) {
        res.status(404)
    }
})

module.exports = router;

