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
// router.post('/', async (req, res, next) => {
//     let chirpsdb = req.body;
//     let id = req.params.id;
//     try {
//         res.json(await db.chirpsdb.post(id, chirpsdb.chirpsdb, chirpsdb.name))
//     } catch (e) {
//         console.log(e)
//         res.sendStatus(500)
//     }

// })

// Request to update a chirp id
router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let chirpsdb = req.body;

    try {
        res.json(await db.chirpsdb.update(chirpsdb.chirpsdb, chirpsdb.name, id))
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