import React, { useEffect, useState } from 'react';
import './fake.css';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const Fake = () => {
    const [fake, setFake] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setFake(json);
            });
    }, []);

    function sweet() {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    return (
        <div className='container'>
            <h1 className='text-center ftxt'>Fake Api Products</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto sint labore provident eaque mollitia aliquid ratione adipisci expedita pariatur! Corrupti sit deleniti assumenda ea accusantium molestiae nisi rerum aspernatur?</p>
            <div className='row'>
                {fake.map(function(product) {
                    return (
                        <div className='col-lg-3' key={product.id}>
                            <div className='text-center coll'>
                                <img className='imgfake' src={product.image} alt="" />
                                <h3 className='price'>Price: {product.price}</h3>
                                <h4>{product.title.slice(0, 17)}</h4>
                                <Link to={`/SingleFake/${product.id}`}>
                                    <button className='btn btn-primary ' onClick={sweet}>Add To Card</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Fake;
