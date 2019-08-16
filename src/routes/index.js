const express = require('express');
const router = express.Router();
const { create } = require('../database/mongo/Post');
const resMsgs = require('../util/resMsgs')
router.get('/', (req, res) => {
    res.render('blog')
});

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/post', async (req, res) => {
    try {
        const {
            title,
            subtitle,
            author,
            tags,
            text
        } = req.body;
        
        let post = await create({
            title,
            subtitle,
            author,
            tags,
            text
        });
        res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({
            ...resMsgs[500], 
            errors: [{
                ...resMsgs[500].errors[0],
                msg: error.message
            }]
        })
    }
});

module.exports = router;