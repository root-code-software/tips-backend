const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('blog')
});

router.get('/create', (req, res) => {
    res.render('create')
});
router.get('/hello', (req, res) => {
    res.status(200).json({hello:'world'})
});

module.exports = router;