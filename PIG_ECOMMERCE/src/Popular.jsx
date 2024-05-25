import React from 'react'
import './popular.css'
import trendone from './assets/brands/01.png'
import trendtwo from './assets/brands/02.png'
import trendthree from './assets/brands/03.png'
import trendfour from './assets/brands/04.png'
import trendfive from './assets/brands/05.png'
import trendsix from './assets/brands/06.png'



const Popular = () => {
  return (
    <div>
    <div className="container text-center">
   <h2 className='title-popular'>Popular Brands</h2> 
    </div>
<div className="container Papa">
<div className="row">
<div className="col-lg-2 col-sm-5">
    <img src={trendone} alt="" />
</div>
<div className="col-lg-2 col-sm-5">
<img src={trendtwo} alt="" />
</div>
<div className="col-lg-2 col-sm-5">
<img src={trendthree} alt="" />
</div>
<div className="col-lg-2 col-sm-5">
<img src={trendfour} alt="" />
</div>
<div className="col-lg-2 col-sm-5">
<img src={trendfive} alt="" />
</div>
<div className="col-lg-2 col-sm-5">
<img src={trendsix} alt="" />
</div>
</div>





</div>

    </div>
  )
}

export default Popular