const db = require("../models");
const Account = db.Account;

// Create and Save a new account
const create = (req, res) => {
  const {
    name_first,
    name_last,
    email,
    phone,
    address,
    picture,
    employer,
    comments,
    credit,
    balance,
  } = req.body;

  // Validate request
  if (!name_first || !email || !phone) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }


  // Create an account
  const account = new Account({
    name_first,
    name_last,
    email,
    phone,
    address,
    picture,
    employer,
    comments,
    credit,
    balance,
  });

  // Save account in the database
  account
    .save(account)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the account."
      });
    });
};

// Retrieve all accounts
const findAll = (req, res) => {
  Account.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving accounts."
      });
    });
};

// Find a single account with an id
const findOne = (req, res) => {
  const id = req.params.id;

  Account.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found account with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving account with id=" + id });
    });
};

// Update an account by the id in the request
const update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Account.findByIdAndUpdate(id, req.body)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update account with id=${id}. Maybe account was not found!`
        });
      } else res.send({ message: "account was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating account with id=" + id
      });
    });
};

// Delete an account with the specified id in the request
const deleteOne = (req, res) => {
  const id = req.params.id;

  Account.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete account with id=${id}. Maybe account was not found!`
        });
      } else {
        res.send({
          message: "account was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete account with id=" + id
      });
    });
};

// Delete all accounts from the database.
const deleteAll = (req, res) => {
  Account.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} accounts were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all accounts."
      });
    });
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
  deleteAll,
};