var mongoose = require('mongoose');

var ExpenseSchema = new mongoose.Schema ({
  Expense_Date: {type: String, required: true, max:100},
  Vendor: {type: String, required: true, max: 100},
  Purpose: {type: String, required: false, max: 100},
  Description: {type: String, required: true, max: 250},
  Amount: {type: Number, required: true, max: 1000}
});

module.exports = mongoose.model('Expenses', ExpenseSchema);
