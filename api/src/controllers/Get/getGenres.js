const { Router } = require('express');

const { Movies, Genres} = require("../../db")


const router = Router();

router.get('/', async (req, res) => {

    try {
        const allGenres = await Genres.findAll({
             include: [{
                model: Movies,
                attributes: ["id", "title", "img", "date", "rate", "description"],
                through: { attributes: [] } 

              }] 
        })
        res.status(200).json(allGenres)
       
    } catch (error) {
        res.status(404)
    }
})

module.exports = router;

