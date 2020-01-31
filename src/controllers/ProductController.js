const mogoose = require('mongoose');

const Product = mogoose.model('Product');

module.exports = {
   async index(request, response) {
      const products = await Product.find();

      return response.json(products);
   },

   async store(request, response) {
      // Criação de produtos/cadastro
      const product = await Product.create(request.body);

      return response.json(product);
   }
};
