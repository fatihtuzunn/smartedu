const express = require('express');
const pageController = require('../controllers/pageController')

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/course-single').get(pageController.getCoursesinglePage);
/* router.route('/courses').get(pageController.getCoursesPage) */
router.route('/dashboard').get(pageController.getDashboardPage);
router.route('/login').get(pageController.getLoginPage);
router.route('/register').get(pageController.getRegisterPage);  

module.exports = router;
/*
var express = require('express');
var app = express();
var router = express.Router();
var PORT = 3000;
	
// Single routing

 router.route('/user')
.get(function (req, res, next) {
	console.log("GET request called");
	res.end();
});

app.use(router);

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
 */