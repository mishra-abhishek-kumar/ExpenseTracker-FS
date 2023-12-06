const Expense = require('../models/Expense');

const addExpense = async (req, res) => {
    try {
        const expense = await Expense.create({
            amt: req.body.amt,
            description: req.body.description,
            category: req.body.category
        });
        res.send(expense);
    } catch (error) {
        console.log(error);
    }
}

module.exports = addExpense;