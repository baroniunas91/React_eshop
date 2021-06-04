import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import { getProducts } from '../common/requests';
import Spinner from '../common/components/Spinner';

function Products() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const { data } = await axios(getProducts);
      setIsLoading(false);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  if (isLoading || !products) {
    return <Spinner text="Fetching products" />;
  }
  return (
    <ul className="flex flex-wrap">
      {products.map((x) => (
        <ProductCard
          key={x.id}
          id={x.id}
          image={x.image}
          title={x.title}
          price={x.price}
        />
      ))}
    </ul>
  );
}
export default Products;
