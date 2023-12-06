const Expense = require('../models/Expense');

const deleteExpense = async (req, res) => {
    const expenseId = req.params.expenseId;

    try {
        const expense = await Expense.findByPk(expenseId);
        const result = await expense.destroy();
        res.send(result);   
    } catch (error) {
        console.log(error);
    }
}

module.exports = deleteExpense;