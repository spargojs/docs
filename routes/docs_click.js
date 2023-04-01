let express = require('express');
let router = express.Router();

/* GET docs click page. */
router.get('/', function(req, res, next) {
    res.render('docs_click', { title: 'Spargo.js - Docs - Click', layout: 'docs_layout.hbs' });
});

module.exports = router;
