import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import ProductDisplay from '../components/ProductDisplay';

const SingleProduct = (props) => {
    const [products, setProduct] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data.results);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
                {
                    products && <ProductDisplay data={products} />
                }
        </div>
    )

}

export default SingleProduct;