const router = require('express').Router();
const updateExpense = require('../controllers/UpdateExpense');

router.put('/edit-expense/:expenseId', updateExpense);

module.exports = router;