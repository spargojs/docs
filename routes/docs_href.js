let express = require('express');
let router = express.Router();

/* GET docs href page. */
router.get('/', function(req, res, next) {
    res.render('docs_href', { title: 'Spargo.js - Docs - Href', layout: 'docs_layout.hbs' });
});

module.exports = router;
