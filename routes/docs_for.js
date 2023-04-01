let express = require('express');
let router = express.Router();

/* GET docs for page. */
router.get('/', function(req, res, next) {
    res.render('docs_for', { title: 'Spargo.js - Docs - For', layout: 'docs_layout.hbs' });
});

module.exports = router;
