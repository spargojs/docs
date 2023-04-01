let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spargo.js', layout: 'landing_layout.hbs' });
});

module.exports = router;
