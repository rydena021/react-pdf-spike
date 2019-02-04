const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/pdf', (req, res) => {
  console.log('GET hit');
  res.send('https://master.tus.io/files/492699437a4a42a11201d77f210b54b4+XQIejXWE.1EiUblqTlmEGpY0NlfGzDncFNKK9T0wD7.1pCxofiQYaVpX3gFyvMZBsEBV_8Sqn47qIF1BKNrGiJkA42VW8Hqe8GbEFc17dSYtc65kkEe8doxXDiujv0nk')

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('POST hit');
  console.log(req.body);


});

module.exports = router;
