import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Create = (props) => {
    const history = useHistory();

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

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/products/create", form)
            .then(res=>{
                console.log(res);
                history.push('/');
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>Product Manager</h1>
                <div className="form-group">
                    <input name="title" className="form-control" type="text" placeholder="Title" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="price" className="form-control" type="number" placeholder="$Price" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="description" className="form-control" type="text" placeholder="Description" onChange={onChangeHandler} />
                </div>
                    <br></br>
                <input type="submit" className="btn btn-dark" />
            </form>
        </div>
    )
}

export default Create;