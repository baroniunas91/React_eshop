import { useParams } from "react-router"

function Product() {

    const { id } = useParams();

    return (
        <div>
            Product view {id}
        </div>
    )
}

export default Product