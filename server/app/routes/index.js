'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));


router.use('/beer', require('./beer/beerRoute'))
router.use('/categories', require('./beer/categoryRoute'))
router.use('/user', require('./beer/userRoute'))
router.use('/review', require('./beer/reviewRoute'))
router.use('/styles', require('./beer/styleRoute'))
router.use('/breweries', require('./beer/breweryRoute'))
router.use('/checkout', require('./checkout/checkoutRoute'))
router.use('/search', require('./beer/searchRoute'))
router.use('/orders',require('./beer/orderRoute'))
router.use('/favorites', require('./beer/favoriteRoute'))
router.use('/order',require('./beer/orderRoute'))

router.post('/signup',function(req,res,next){

    res.send(200)
})


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});