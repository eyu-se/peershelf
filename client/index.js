import express from 'express';
import assert from 'assert';
import bodyParser from 'body-parser';

const router = express.Router();

router.use(express.static('./public'));

router.use(bodyParser.json());


router.get('', (req, res) => {
    res.render(__dirname + '/views/index', {
        content: "",
        header: "Peer Shelf"
    });
});
export default router;
