let express = require('express');
let router = express.Router();

/* GET docs class page. */
router.get('/', function(req, res, next) {
    res.render('docs_class', { title: 'Spargo.js - Docs - Class', layout: 'docs_layout.hbs' });
});

module.exports = router;
