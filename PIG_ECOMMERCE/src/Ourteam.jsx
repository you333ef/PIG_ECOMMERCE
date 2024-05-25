import React from 'react'
import './ourteam.css'
import amal from './assets/team/01.jpg'
import sami from './assets/team/02.jpg'
import gamal from './assets/team/03.jpg'
import esraa from './assets/team/04.jpg'
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { TiSocialSkypeOutline } from "react-icons/ti";
const Ourteam = () => {
    return (
        <div >
            <div className="container">
            <h2 className='text-center'>Our Team</h2>
            <p className='text-center'>There are many variations of passages of Lorem Ipsum available, but<br/> the majority have suffered alteration in some form.</p>
            </div>
            <div className="container LL">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12 AMAL">
<img src={amal} alt="" />
<h3 className='text-center'>Amal Ibrahim</h3>
<h4 className='text-center'>Frontend Developer</h4>
<div className="text-center icons">
<AiFillTwitterCircle  className='icon'/>
<MdOutlineFacebook  className='icon'/>
<TiSocialSkypeOutline  className='icon'/>
</div>
                        </div>
                        <div className="col-lg-3 col-sm-12 SAMI">
 <img src={sami} alt="" />     
 <h3 className='text-center'>Sami Azab</h3>
<h4 className='text-center'>Flutter Developer</h4>
<div className='text-center icons'>
<AiFillTwitterCircle className='icon' />
<MdOutlineFacebook className='icon' />
<TiSocialSkypeOutline className='icon' />
</div>

                        </div>
                        <div className="col-lg-3 col-sm-12 GAMAL">
 <img src={gamal} alt="" />   
 <h3 className='text-center'>Gamal Ibrahim</h3>
<h4 className='text-center'>Back End Developer</h4>
<div className='text-center icons'>
<AiFillTwitterCircle  className='icon'/>
<MdOutlineFacebook  className='icon'/>
<TiSocialSkypeOutline  className='icon'/>  
</div>
                        </div>
                        <div className="col-lg-3 col-sm-12 ESRAA">
<img src={esraa} alt=""  />     
<h3 className='text-center'>Esraa Ibrahim</h3>
<h4 className='text-center'>Frontend Developer</h4>
<div className='text-center icons'>
<AiFillTwitterCircle  className='icon'/>
<MdOutlineFacebook  className='icon'/>
<TiSocialSkypeOutline  className='icon'/>
</div>

                        </div>


                    </div>





            </div>
        </div>
    )
}

export default Ourteam
