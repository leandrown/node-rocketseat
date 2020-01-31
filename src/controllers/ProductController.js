const mogoose = require('mongoose');

const Product = mogoose.model('Product');

module.exports = {
   async index(request, response) {
      const { page = 1 } = request.query;
      const products = await Product.paginate({}, { page, limit: 10 });

      return response.json(products);
   },

   async show(request, response) {
      const product = await Product.findById(request.params.id);
      return response.json(product);
   },

   async store(request, response) {
      // Criação de produtos/cadastro
      const product = await Product.create(request.body);

      return response.json(product);
   },

   async update(request, response) {
      // A opçao new faz com que a variavel retorne com os valores já atualizados
      const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true });

      return response.json(product);
   },

   async destroy(request, response) {
      await Product.findByIdAndRemove(request.params.id);

      return response.send();
   }
};