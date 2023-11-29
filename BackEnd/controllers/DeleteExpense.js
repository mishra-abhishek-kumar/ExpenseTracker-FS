const Expense = require('../models/Expense');

const deleteExpense = (req, res) => {
    const expenseId = req.params.expenseId;
    Expense.findByPk(expenseId)
        .then(expense => {
            return expense.destroy();
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err))
}

module.exports = deleteExpense;