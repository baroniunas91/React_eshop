import { useEffect, useState } from "react";
import Card from "../common/components/Card";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json();

            setProducts(products);

        }
        getProducts();
    }, []);

    return (
        <ul className="flex flex-wrap">
            {products.map((x) => (
                <li className="p-2" key={x.id}>
                    <Card className="w-64 h-80" isRound>
                        <div className="h-3/4 p-4">
                            <img className="max-h-full m-auto" src={x.image} alt={x.title} />
                        </div>

                        <div className="text-center font-bold truncate" title={x.title}>{x.title}</div>

                        <div className="text-center">{x.price}$</div>
                    </Card>
                </li>
            ))}
        </ul>
    );
}
export default Products
