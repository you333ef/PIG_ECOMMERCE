import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
const SingleFake = () => {
    let{id}=useParams()
    const [fake, setFake] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
               
                setFake(json);
            })
            
    }, []);
  return (

    <div className='container'>
       <div className="row">
            <div className="col-lg-4">
                {fake.description && <img src={fake.image}className='single-image' alt="" />}
            </div>
            <div className="col-lg-6 infrmtion">
                <h3 className='dommytitle'>{fake.title}</h3>
                <h4>{fake.description}</h4>
                <FaStar  className='star'/><FaStar  className='star'/><FaStar  className='star'/><FaStar  className='star'/><FaStar className='star' />
                <h3 className='dommyprice'>Price:{fake.price}</h3>
                <h4> Category:{fake.category}</h4>
                <button className="btn btn-primary">Add TO Card</button>
            </div>
        </div>
      


    
    </div>
  );
}

export default SingleFake;
