let express = require('express');
let router = express.Router();

/* GET docs ignited page. */
router.get('/', function(req, res, next) {
    res.render('docs_ignited', { title: 'Spargo.js - Docs - Ignited', layout: 'docs_layout.hbs' });
});

module.exports = router;
