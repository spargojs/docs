let express = require('express');
let router = express.Router();

/* GET docs page. */
router.get('/', function(req, res, next) {
    res.render('docs', { title: 'Spargo.js - Docs', layout: 'docs_layout.hbs' });
});

module.exports = router;
