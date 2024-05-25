import React from 'react';
import './services.css';
import { FaTruck } from "react-icons/fa6";
import { MdBrowserNotSupported } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";

const Services = () => {
  return (
    <div>
<div className="container ">
  <h3 className='text-center title-services'>Our Services</h3>
  <p></p>
<div className="row text-center oloo">
<div className="col-lg-3 col-sm-12 shadoo">
<FaTruck  className='icon'/>
<h2 id='Free'>Free Shipping</h2>
</div>
<div className="col-lg-3 col-sm-12 shadoo">
<MdBrowserNotSupported className='icon' />
<h2 id='Free'>24/7 Support.</h2>
</div>
<div className="col-lg-3 col-sm-12 shadoo">
<MdOutlinePayment  className='icon'/>
<h2 id='Free'>Online Payment.</h2>
</div>
<div className="col-lg-3 col-sm-12 shadoo">
<GiReturnArrow  className='icon'/>
<h2 id='Free'>Easy Return.</h2>
</div>
</div>
</div>




    </div>
  )
}

export default Services