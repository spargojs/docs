let express = require('express');
let router = express.Router();

/* GET docs setters page. */
router.get('/', function(req, res, next) {
    res.render('docs_setters', { title: 'Spargo.js - Docs - Setters', layout: 'docs_layout.hbs' });
});

module.exports = router;
