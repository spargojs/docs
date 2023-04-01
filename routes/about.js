let express = require('express');
let router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'Spargo.js - About', layout: 'landing_layout.hbs' });
});

module.exports = router;
