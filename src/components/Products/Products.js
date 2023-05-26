import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
        {products.map((_, i) => <Product key={products[i].id} {...products[i]}/>)}
    </section>
  );
};

export default Products;