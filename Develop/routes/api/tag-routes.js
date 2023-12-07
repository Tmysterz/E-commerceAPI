const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


// TODO: ASK ABOUT include: [{}]
// TODO: when ever i do search all tags the products field is empty. see hw readme to see what it is suppused to look like
// TODO: HELP WITH UPDATE ROUTE


// COMPLETED

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  try {
    const tagData = await Tag.findAll({
      // ************** TODO: What models do i include for this **************  
      include: [ {model: Product} ],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// COMPLETED

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // ************** TODO: What models do i include for this **************  
      include: [ { model: Product } ],
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

// COMPLETED

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// NEED TO TEST

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
});

// COMPLETED

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
