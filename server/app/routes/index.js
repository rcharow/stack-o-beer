'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use(require('./beer/beerRoute.js'));
// Make sure this is after all of
// the registered routes!


router.get('/categories', function(req, res){
	console.log('YOOOOOOOOO');
	return res.send('hi');

	// return category.find().exec().then(function(cats){
	// 	console.log(cats);
	// 	res.json(cats)
	// },function(err){
	// 	res.status(500).end()
	// })

})
router.use(function (req, res) {
    res.status(404).end();
});