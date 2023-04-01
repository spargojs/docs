let express = require('express');
let router = express.Router();

/* GET docs text page. */
router.get('/', function(req, res, next) {
    res.render('docs_text', { title: 'Spargo.js - Docs - Text', layout: 'docs_layout.hbs' });
});

module.exports = router;
