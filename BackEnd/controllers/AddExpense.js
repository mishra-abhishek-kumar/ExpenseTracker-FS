const Expense = require('../models/Expense');

const addExpense = (req, res) => {
    Expense.create({
        amt: req.body.amt,
        description: req.body.description,
        category: req.body.category
    })
    .then(expense => {
        res.send(expense);
    })
    .catch(err => console.log(err))
}

module.exports = addExpense;