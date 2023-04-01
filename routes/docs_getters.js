let express = require('express');
let router = express.Router();

/* GET docs getters page. */
router.get('/', function(req, res, next) {
    res.render('docs_getters', { title: 'Spargo.js - Docs - Getters', layout: 'docs_layout.hbs' });
});

module.exports = router;
