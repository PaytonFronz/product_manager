import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


const Update = () => {
    const history = useHistory();
    const { _id } = useParams();


    const [form, setForm] = useState({
        title: "",
        price: 0,
        description: "",
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    
    const updateSingleProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/products/${_id}/update`, form)
            .then(res => {
                console.log(res);
                history.push('/');
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                console.log(res.data);
                setForm(res.data.results);
            })
            .catch(err => console.log(err))
    }, [_id]);


    return (
        <div>
            <form onSubmit={updateSingleProduct}>
                <h1>Product Manager</h1>
                <div className="form-group">
                    <input name="title" value={form.title} className="form-control" type="text" placeholder="Title" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="price" value={form.price} className="form-control" type="number" placeholder="$Price" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="description" value={form.description} className="form-control" type="text" placeholder="Description" onChange={onChangeHandler} />
                </div>
                <br></br>
                <input type="submit" className="btn btn-dark" />
            </form>
        </div>
    )
}

export default Update;
