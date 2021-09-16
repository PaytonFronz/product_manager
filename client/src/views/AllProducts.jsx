import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDisplay from '../components/ProductDisplay';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // console.log(products)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/all`)
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }, [loaded])

    return (
        <div className="allProducts">
            <h1>All Products</h1>
                {
                    products.map((item, i) => {
                        return <ProductDisplay key={i} data={item} setLoaded={setLoaded}/>
                    })
                }
        </div>
    )

}

export default AllProducts;