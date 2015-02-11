var express = require('express'),
    router = express.Router(),
    before1 = 0,
    before2 = 0,
    before3 = 0,
    after1 = 0,
    after2 = 0,
    after3 = 0;


function getValues() {
  return { before1: before1, before2: before2, before3: before3, after1: after1, after2: after2, after3: after3 };
}

router.get('/', function(req, res, next) {
  res.render('index', getValues());
});

router.get('/options', function(req, res, next) {
  res.send(getValues());
});

router.post('/options', function(req, res, next) {
  if (req.body.before1) {
    before1 += req.body.before1;
    if (before1 < 0)
      before1 = 0;
  }
  if (req.body.before2) {
    before2 += req.body.before2;
    if (before2 < 0)
      before2 = 0;
  }
  if (req.body.before3) {
    before3 += req.body.before3;
    if (before3 < 0)
      before3 = 0;
  }
  if (req.body.after1) {
    after1 += req.body.after1;
    if (after1 < 0)
      after1 = 0;
  }
  if (req.body.after2) {
    after2 += req.body.after2;
    if (after2 < 0)
      after2 = 0;
  }
  if (req.body.after3) {
    after3 += req.body.after3;
    if (after3 < 0)
      after3 = 0;
  }
  res.send(getValues());
});

router.put('/options', function(req, res, next) {
  if (req.body.before1) {
    before1 = req.body.before1;
    if (before1 < 0)
      before1 = 0;
  }
  if (req.body.before2) {
    before2 = req.body.before2;
    if (before2 < 0)
      before2 = 0;
  }
  if (req.body.before3) {
    before3 = req.body.before3;
    if (before3 < 0)
      before3 = 0;
  }
  if (req.body.after1) {
    after1 = req.body.after1;
    if (after1 < 0)
      after1 = 0;
  }
  if (req.body.after2) {
    after2 = req.body.after2;
    if (after2 < 0)
      after2 = 0;
  }
  if (req.body.after3) {
    after3 = req.body.after3;
    if (after3 < 0)
      after3 = 0;
  }
  res.send(getValues());
});

module.exports = router;
