
const { Router } = require('express');
const Product = require('../models/products');

const router = Router();


router.post('/product', (req, res) => {
    console.log('data', req.body)
    const { title, price, imageurl, description } = req.body;

    const product = new Product({ title, price, imageurl, description });
    console.log(product);
    product.save()
        .then(() => res.json(`Product Added: ${product.title}`))
        .catch(e => res.json('Not saved'))
});


router.get('/products', (req, res) => {
    Product.find()
    .then((data)=>{console.log(data)
        res.json(data)})
        .catch(e=>res.json('not getting'))

});
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
    .then((data)=>{console.log(data)
        res.json(data)})
        .catch(e=>res.json('not getting'))

});

router.delete('/:id',(req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .then(() => res.json('Conatact deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.post('/:id',(req, res) => {
    Product.findById(req.params.id)
      .then(pro => {
        pro.title = req.body.title;
        pro.imageurl = req.body.imageurl;
        pro.price = req.body.price;


        pro.description = req.body.description;
  
        pro.save()
          .then(() => res.json('Product updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;

