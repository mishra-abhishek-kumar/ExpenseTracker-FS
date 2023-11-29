const router = require('express').Router();
const addExpense = require('../controllers/AddExpense');

router.post('/add-expense', addExpense);

module.exports = router;