import Card from '../../common/components/Card';
import Button from '../../common/components/Button';

function ProductCard({ id, image, title, price }) {
  return (
    <li className="p-2">
      <Card className="w-64 h-80" isRound>
        <div className="h-3/4 p-4 flex">
          <img className="max-h-full m-auto" src={image} alt={title} />
        </div>

        <div className="text-center font-bold truncate" title={title}>
          {title}
        </div>

        <div className="text-center">{price}$</div>
        <div className="flex justify-center">
          <Button to={`/products/${id}`}>VIEW</Button>
        </div>
      </Card>
    </li>
  );
}

export default ProductCard;
