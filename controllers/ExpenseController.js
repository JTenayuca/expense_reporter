var mongoose = require('mongoose');
var Expense = require("../models/Expenses");

var expenseController = {};

expenseController.list = function(req, res) {
  Expense.find({}).exec(function (err, expenses) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/expenses/index", {expenses: expenses})
    }
  });
};

expenseController.show = function(req, res) {
  Expense.findOne({_id: req.params.id}).exec(function (err, expenses) {
    if(err) {
      console.log("Error:", err)
    }
    else {
      res.render("../views/expenses/show", {expenses: expenses})
    }
  });
};

expenseController.create = function(req, res) {
  res.render("../views/expenses/create");
};

expenseController.save = function(req, res) {
  var expense = new Expense(req.body);

  expense.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/expenses/create")
    }
    else {
      console.log("Successfully created an expense.")
      res.redirect("/expenses/show/"+ expense._id);
    }
  });
};

expenseController.edit = function(req, res) {
  Expense.findOne({_id: req.params.id}).exec(function (err, expense) {
    if(err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/expenses/edit", {expense: expense});
    }
  });
};

expenseController.update = function(req, res) {
  Expense.findByIdAndUpdate(req.params.id, { $set: { Expense_Date: req.body.Expense_Date, Vendor: req.body.Vendor, Purpose: req.body.Purpose, Description: req.body.Description, Amount: req.body.Amount }}, { new:true }, function (err, expense) {
      if(err) {
        console.log(err)
        res.render("../views/expenses/edit", {expense: req.body});
      }
      res.redirect("/expenses/show/"+expense._id);
    });
};

expenseController.delete = function(req, res) {
  Expense.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Expense deleted!");
      res.redirect("/expenses");
    }
  });
};

module.exports = expenseController;
