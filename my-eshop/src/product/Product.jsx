import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../common/components/Card';
import { getProduct } from '../common/requests';
import Counter from '../common/components/Counter';
import Button, { buttonTypes } from '../common/components/Button';
import Spinner from '../common/components/Spinner';
import useApi from '../common/hooks/useApi';

function Product() {
  const { id } = useParams();
  const { isLoading, data: product, call } = useApi();
  useEffect(() => {
    call(getProduct(id));
  }, [id]); //eslint-disable-line

  if (isLoading || !product) {
    return <Spinner text="Fetching product info" />;
  }

  return (
    <div className="flex m-auto" style={{ maxWidth: 1000 }}>
      <div className="flex-1 pl-2 pr-8">
        <Card>
          <img src={product.image} alt={product?.title} />
        </Card>
      </div>

      <div className="flex-1 pr-2 pl-8">
        <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
        <div className="text-3xl font-bold mb-4">{product.price}$</div>
        <p className="mb-4">{product.description}</p>
        <div className="font-semibold mb-2">Quantity</div>
        <Counter className="mb-4"></Counter>
        <Button type={buttonTypes.PRIMARY}>ADD TO CART</Button>
      </div>
    </div>
  );
}

export default Product;
