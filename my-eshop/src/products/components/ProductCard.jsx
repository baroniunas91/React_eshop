import Card from "../../common/components/Card";
import { Link } from "react-router-dom";

function ProductCard({id, image, title, price}) {
    return (
        <li className="p-2">
            <Card className="w-64 h-80" isRound>
                <div className="h-3/4 p-4">
                    <img className="max-h-full m-auto" src={image} alt={title} />
                </div>

                <div className="text-center font-bold truncate" title={title}>{title}</div>

                <div className="text-center">{price}$</div>
                <div className="flex justify-center uppercase">
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" to ={`/product/${id}`}>view</Link>
                </div>
            </Card>
        </li>
    )
}

export default ProductCard
