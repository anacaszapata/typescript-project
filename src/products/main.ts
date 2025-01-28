import {addProduct, calcStock, products} from './product.service';

  addProduct({
    title: 'Product 1',
    createdAt: new Date(1991,1,1),
    stock: 12,
});

addProduct({
  title: 'Product 2',
  createdAt: new Date(1991,1,1),
  stock: 12,
  size: 'XL'
});
console.log(products);
const total = calcStock();
console.log(total);


