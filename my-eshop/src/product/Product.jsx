import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from '../common/requests';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios(getProduct(id));
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    console.log(product);
    return (
        <div>
            Product view {id}
        </div>
    )
}

export default Product