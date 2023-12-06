const Expense = require('../models/Expense');

const getExpense = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.send(expenses);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getExpense;