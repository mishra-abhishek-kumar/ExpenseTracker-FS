const Expense = require('../models/Expense');

const getExpense = (req, res) => {
    Expense.findAll()
        .then(expenses => {
            res.send(expenses);
        })
        .catch(err => console.log(err))
}

module.exports = getExpense;