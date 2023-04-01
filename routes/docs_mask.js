let express = require('express');
let router = express.Router();

/* GET docs mask page. */
router.get('/', function(req, res, next) {
    res.render('docs_mask', { title: 'Spargo.js - Docs - Mask', layout: 'docs_layout.hbs' });
});

module.exports = router;
