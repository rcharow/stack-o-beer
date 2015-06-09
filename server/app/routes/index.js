'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));

router.post('/signup',function(req,res,next){

    res.send(200)
})

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});