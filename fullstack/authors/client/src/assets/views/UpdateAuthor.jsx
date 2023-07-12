import React, { useEffect, useState } from 'react'
import Form from '../../components/Form';
import { useParams } from 'react-router-dom';
import axios from "axios"
const AddAuthor = (props) => {
    const {selectedAuthor} = props
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false);
    const {id} = useParams();

    useEffect (() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true)
            })
            .catch((err) => res.json({message: "Something went wrong!", error: err}))
    },[])

    return (
            loaded && <Form selectedAuthor={author}/>
    );
}
export default AddAuthor;

