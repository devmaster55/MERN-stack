const { Router } = require('express');
const accountsController = require('../controllers/accounts.controller');

const router = Router();

// Add a new account
router.post("/accounts", accountsController.create);

// Retrieve all accounts
router.get("/accounts", accountsController.findAll);

// Retrieve a single account with id
router.get("/accounts/:id", accountsController.findOne);

// Update a account with id
router.put("/accounts/:id", accountsController.update);

// Delete a account with id
router.delete("/accounts/:id", accountsController.deleteOne);

// Delete all accounts
router.delete("/accounts", accountsController.deleteAll);

module.exports = router;