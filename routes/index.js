var express = require('express'),
    router = express.Router(),
    option1 = 0,
    option2 = 2,
    option3 = 1;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { option1: option1, option2: option2, option3: option3 });
});

router.get('/options', function(req, res, next) {
  res.send({ option1: option1, option2: option2, option3: option3 });
});

router.post('/options', function(req, res, next) {
  if (req.body.option1) {
    option1 += req.body.option1;
    if (option1 < 0)
      option1 = 0;
  }
  if (req.body.option2) {
    option2 += req.body.option2;
    if (option2 < 0)
      option2 = 0;
  }
  if (req.body.option3) {
    option3 += req.body.option3;
    if (option3 < 0)
      option3 = 0;
  }
  res.send({ option1: option1, option2: option2, option3: option3 });
});

module.exports = router;
