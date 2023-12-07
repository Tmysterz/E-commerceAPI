const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// TODO: TEST ALL ROUTES
// TODO: ASK ABOUT include: [{}]
// TODO: need help with .post and .put 

// NEED TO TEST

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      // ************** TODO: What models do i include for this **************  
      include: [{ model: Product } ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// NEED TO TEST

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // ************** TODO: What models do i include for this **************  
      include: [ { model: Product } ],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// NEED TO TEST

router.post('/', (req, res) => {
  // create a new category
});

// NEED TO TEST

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// NEED TO TEST

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      },
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
