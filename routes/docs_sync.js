let express = require('express');
let router = express.Router();

/* GET docs sync page. */
router.get('/', function(req, res, next) {
    res.render('docs_sync', { title: 'Spargo.js - Docs - Sync', layout: 'docs_layout.hbs' });
});

module.exports = router;
