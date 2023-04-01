let express = require('express');
let router = express.Router();

/* GET docs conditional page. */
router.get('/', function(req, res, next) {
    res.render('docs_conditional', { title: 'Spargo.js - Docs - Conditional', layout: 'docs_layout.hbs' });
});

module.exports = router;
