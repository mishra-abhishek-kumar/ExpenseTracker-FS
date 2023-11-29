const router = require('express').Router();
const getExpense = require('../controllers/GetExpense');

router.get('/get-expense', getExpense);

module.exports = router;