const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Define CRUD routes here (GET, POST, PUT, DELETE)
// Example routes:

// Get all items
router.get('/', (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a new item
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
  });

  newItem
    .save()
    .then(() => res.json('Item added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update an item
router.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => res.json('Item updated!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Delete an item
router.delete('/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;