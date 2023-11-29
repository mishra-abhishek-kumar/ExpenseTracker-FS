const Expense = require('../models/Expense');

const updateExpense = (req, res) => {
    const expenseId = req.params.expenseId;
    const amt = req.body.amt;
    const description = req.body.description;
    const category = req.body.category;

    Expense.findByPk(expenseId)
        .then(expense => {
            expense.amt = amt;
            expense.description = description;
            expense.category = category
            return expense.save();
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = updateExpense;