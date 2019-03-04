import * as express from 'express';
import db from '../../db/index';

const router = express.Router();



// Walkthrough Logic 
// CHirps or one chirp by id
router.get('/', async (req, res, next) => {

    try {
        res.json(await db.chirpsdb.all())

    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
});

router.get('api/chirpsdb/:id', async (req, res) => {
    try {
        res.json((await db.chirpsdb.oneChirp(req.params.id))[0])
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})




// THis post request creates chirp
router.post('/api/chirpsdb/:id', async (req, res, next) => {
    let chirpsdb = req.body;
    let id = req.params.id;
    try {
        res.json(await db.chirpsdb.post(id, chirpsdb.chirpsdb, chirpsdb.name))
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
    // chirpsStore.CreateChirp(req.body);
    // res.send(chirpsStore.GetChirps());
})

// Request to update a chirp id
// router.put('/:id', (req, res) => {
//     let id = req.params.id;
// chirpsStore.UpdateChirp(id, req.body)
// res.send(chirpsStore.GetChirps());
// })

// Request to delete the chirp id
// router.delete('/:id', (req, res) => {
//     let id = req.params.id
// chirpsStore.DeleteChirp(id);
// res.send(chirpsStore.GetChirps());
// })


export default router;