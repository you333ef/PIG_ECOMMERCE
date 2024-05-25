import React from 'react';
import './category.css'
import Airpods from './assets/featured-categories/fetured-item-1.png'
import Kissa from './assets/featured-categories/fetured-item-2.png'
import handcamera from './assets/featured-categories/fetured-item-3.png'
import camera from './assets/featured-categories/fetured-item-4.png'
import mopile from './assets/featured-categories/fetured-item-5.png'
import playstation from './assets/featured-categories/fetured-item-6.png'

const Category = () => {
  return (
    <div className='container  cateHead'>
        <h1 className='once-cate text-center'>Featured Categories</h1>
        <p className='twice-cate text-center'>There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration in some form.</p>
    <div className='cate-product container'>
<div className='row all-products'>

<div className="col-lg-4 col-sm-12 Airpods">
<div>
<h3 >TV & Audios</h3>
<h3>Smart<br/>Television</h3>
<h3>QLED TV</h3>
<h3>Audios</h3>
<h3>Headphones</h3>
</div>
<img src={Airpods} alt="" />


</div>
<div className="col-lg-4 col-sm-12 Kissa">
<div>
<h3 >TV & Audios</h3>
<h3>Smart<br/>Television</h3>
<h3>QLED TV</h3>
<h3>Audios</h3>
<h3>Headphones</h3>
</div>
<img src={Kissa} alt="" />

 

</div>
<div className="col-lg-4 col-sm-12 handcamera">
  <div>
<h3 >TV & Audios</h3>
<h3>Smart<br/>Television</h3>
<h3>QLED TV</h3>
<h3>Audios</h3>
<h3>Headphones</h3>
</div>
<img src={handcamera} alt="" />

</div>
<div className="col-lg-4 col-sm-12 camera">
<div>
<h3 >TV & Audios</h3>
<h3>Smart<br/>Television</h3>
<h3>QLED TV</h3>
<h3>Audios</h3>
<h3>Headphones</h3>
</div>
<img src={camera} alt="" />
 

</div>
<div className="col-lg-4 col-sm-12 mopile">
<div >
<h3 >TV & Audios</h3>
<h3>Smart<br/>Television</h3>
<h3>QLED TV</h3>
<h3>Audios</h3>
<h3>Headphones</h3>
</div>
<img src={mopile} alt="" />

</div>
<div className="col-lg-4 col-sm-12 playstation">
   

<div>
<h3 >TV & Audios</h3>
<h3>Smart<br/>Television</h3>
<h3>QLED TV</h3>
<h3>Audios</h3>
<h3>Headphones</h3>
</div>
<img src={playstation} alt="" />

</div>

</div>






    </div>




    </div>











  );
}

export default Category;
