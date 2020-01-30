const mogoose = require('mongoose');

const Product = mogoose.model('Product');

module.exports = {
   async index(request, response) {
      const products = await Product.find();

      return response.json(products);
   }
};
