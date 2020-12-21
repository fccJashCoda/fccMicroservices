const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

// @route GET /
// @desc returns a list of all available routes
// @access public
router.get('/', (req, res) => {
  res.json({ msg: ' / Not Yet Implemented' });
});

// @route POST /timestamp/:time?
// @desc return a timestamp
// @access public
router.post('/timestamp/:time?', apiController.post_timestamp);

module.exports = router;
