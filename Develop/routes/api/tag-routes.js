const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// TODO: TEST ALL ROUTES
// TODO: ASK ABOUT include: [{}]
// TODO: need help with .post and .put 

// NEED TO TEST

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  try {
    const tagData = await Tag.findAll({
      // ************** TODO: What models do i include for this **************  
      include: [{ model: Product } ],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// NEED TO TEST

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // ************** TODO: What models do i include for this **************  
      include: [ { model: ProductTag } ],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// need help with post and put
// how do i create the route using async and await
// NEED TO TEST

router.post('/', async (req, res) => {
  // create a new tag
  
});

// NEED TO TEST

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
});

// NEED TO TEST

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      },
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
