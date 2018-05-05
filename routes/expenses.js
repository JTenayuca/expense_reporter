var express = require('express');

var router = express.Router();

var expense = require("../controllers/ExpenseController.js");

//Get all Expenses
router.get('/', expense.list);

//show
router.get('/show/:id', expense.show);

//create
router.get('/create', expense.create);

//Save

router.post('/save', expense.save);
//edit expense
router.get('/edit/:id', expense.edit);

//edit update
router.post('/update/:id', expense.update);

//delete
router.post('/delete/:id', expense.delete);

module.exports = router;
