const router = require('express').Router();
const deleteExpense = require('../controllers/DeleteExpense');

router.delete('/delete-expense/:expenseId', deleteExpense);

module.exports = router;