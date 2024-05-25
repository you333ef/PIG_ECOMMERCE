import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import './singledom.css'
const SingleDommy = () => {
    let { id } = useParams();
    let [dommy, setDommy] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(json => setDommy(json))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    return (
        <div className='container'>
        <div className="row">
            <div className="col-lg-4 col-sm-5">
                {dommy.description && <img src={dommy.thumbnail}className='single-image' alt="" />}
            </div>
            <div className="col-lg-6 col-sm-6 infrmtion">
                <h3 className='dommytitle'>{dommy.title}</h3>
                <h4>{dommy.description}</h4>
                <FaStar  className='star'/><FaStar  className='star'/><FaStar  className='star'/><FaStar  className='star'/><FaStar className='star' />
                <h3 className='dommyprice'>Price:{dommy.price}</h3>
                <h4> Category:{dommy.category}</h4>
                <button btn btn-primary>Add TO Card</button>
            </div>
        </div>
    </div>
    
    );
}

export default SingleDommy;
