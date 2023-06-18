var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(123, res)
  res.send('相应的数据11');
});

module.exports = router;
