import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


const ProductDisplay = (props) => {
    const { _id, title, price, description } = props.data;
    const { removeFromDom } = props;
    console.log("heelllooooo");
    console.log(props.data)
   
    const deleteSingleProduct = (_id) => {
        axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
            .then(res => {
                removeFromDom(_id);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="productDisplay">
            <form className="form-control">
                <Link to={"/products/" + _id}>
                    <h2>{title}</h2>
                </Link>
                <h3>${price}</h3>
                <h3>Description: {description}</h3>
                <button className="delete" onClick={(e)=>{deleteSingleProduct(_id)}}>Delete</button>
                <button><Link to={`/products/${_id}/update`}>Edit Product</Link></button>
            </form>
        </div>
    )
}

export default ProductDisplay;