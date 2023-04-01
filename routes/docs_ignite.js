let express = require('express');
let router = express.Router();

/* GET docs ignite page. */
router.get('/', function(req, res, next) {
    res.render('docs_ignite', { title: 'Spargo.js - Docs - Ignite', layout: 'docs_layout.hbs' });
});

module.exports = router;
