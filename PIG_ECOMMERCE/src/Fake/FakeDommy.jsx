import React, { useEffect, useState } from 'react';
import './facedommy.css';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const FakeDommy = (props) => {
    let [dommy, setDommy] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setDommy(json.products));
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
            <h1 className='text-center ftxt'>DummyJSON</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt architecto sint labore provident eaque mollitia aliquid ratione adipisci expedita pariatur! Corrupti sit deleniti assumenda ea accusantium molestiae nisi rerum aspernatur?</p>
            <div className='row'>
                {dommy.map((pro) => (
                    <div className='col-lg-3 text-center coll' key={pro.id}>
                        <Link to={`/singledommy/${pro.id}`}>
                            <img src={pro.thumbnail} alt="" />
                        </Link>
                        <h3 className='price'>Price: {pro.price}</h3>
                        <h4>{pro.title.slice(0, 17)}</h4>
                        <button className='btn btn-primary' onClick={() =>props.addToCart(pro)}>More Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FakeDommy;
