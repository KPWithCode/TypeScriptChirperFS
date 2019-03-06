import * as express from 'express';
import db from '../../db/index';


const router = express.Router();


// Walkthrough Logic 
// Chirps or one chirp by id
router.get('/', async (req, res, next) => {

    try {
        res.json(await db.chirpsdb.all())

    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.json((await db.chirpsdb.oneChirp(req.params.id))[0])
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})




// THis post request creates chirp
router.post('/:id', async (req, res, next) => {
    let id = req.params.id;
    let userid = req.body.userid
    let chirptext = req.body.chirptext;
 
    try {
        res.json(await db.chirpsdb.post(id,userid,chirptext))
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }

})

// Request to update a chirp id
router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let chirptext = req.body.chirptext;
    try {
        return res.json(await db.chirpsdb.put(chirptext, id))
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }

})

// Request to delete the chirp id
router.delete('/:id', async (req, res) => {
    let id = req.params.id

    try {
        res.json(await db.chirpsdb.remove(id))
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})


export default router;