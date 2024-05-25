import React from 'react'
import './aboutus.css'
import CountUp from 'react-countup';
import Ourteam from '../Ourteam';
import Charone from '../assets/GreatChar/1.jpg'
import Chartwo from '../assets/GreatChar/2.jpg'
import Charthree from '../assets/GreatChar/3.jpg'
import Charfour from '../assets/GreatChar/4.jpg'
import { LiaStarSolid } from "react-icons/lia";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000 ,
  };
  return (
    //   <NumberCounter end={100} delay={5} className="increment" preFix="Up revenue:" postFix="$"/>
    <div>
    
        <div className="container KOKA">
            <h2 className='text-center ' id='Us'>About Results</h2>
    <div className="row JOJO">
   
        <div className="col-lg-3 col-sm-6 students MEMS">      
        <CountUp  start={0} end={3000}  delay={0}className='CountUp num'/>
<h4  className='ZAHPY'>Students</h4>          
        </div>
        <div className="col-lg-3 col-sm-6 instructor MEMS">
        <CountUp  start={0} end={4000}  delay={1}className='CountUp num'/>
        <h4  className='ZAHPY'>Instrector</h4>
        </div>
        <div className="col-lg-3 col-sm-6 rooms MEMS">
        <CountUp  start={0} end={3000}  delay={2}className='CountUp num'/>
        <h4  className='ZAHPY'>Rooms</h4>
        </div> 
        <div className="col-lg-3 col-sm-6 successfully MEMS">
        <h3 className='persent'>99%</h3>
        <h4  className='ZAHPY'>Successfully</h4>
        </div> 

    </div>
    
        </div>
       


        <Ourteam/>
        <div className="container text-center">
          <div className="text-center">
        <h1 className='client'> Our Client Says</h1> 
          </div>
          </div>
          <div className="container text-center">
          
                      <div className="row allclients">
                      <Slider {...settings}>
                <div className="col-lg-10 nora ">
            <img src={Charone} alt="charone" className='text-center Charimage' />
            <p className='text-center 'id='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe exercitationem <br />repellat dignissimos fuga harum illo,<br /> assumenda vero unde? Veritatis?</p>
            <LiaStarSolid  className='iconstar'/><LiaStarSolid  className='iconstar'/><LiaStarSolid  className='iconstar'/><LiaStarSolid className='iconstar' /><LiaStarSolid className='iconstar' />
                      <h4>Yousef Khaled</h4>
                      <h5>Front End Wep Developer</h5>
                </div>
                <div className="col-lg-10 nora ">
            <img src={Chartwo} alt="charone" className='text-center Charimage' />
            <p className='text-center 'id='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe exercitationem <br />repellat dignissimos fuga harum illo,<br /> assumenda vero unde? Veritatis?</p>
            <LiaStarSolid  className='iconstar'/><LiaStarSolid  className='iconstar'/><LiaStarSolid  className='iconstar'/><LiaStarSolid className='iconstar' /><LiaStarSolid className='iconstar' />
                      <h4>Yousef Khaled</h4>
                      <h5>Front End Wep Developer</h5>
                </div>
                <div className="col-lg-10 nora ">
            <img src={Charthree} alt="charone" className='text-center Charimage' />
            <p className='text-center 'id='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe exercitationem <br />repellat dignissimos fuga harum illo,<br /> assumenda vero unde? Veritatis?</p>
            <LiaStarSolid  className='iconstar'/><LiaStarSolid  className='iconstar'/><LiaStarSolid  className='iconstar'/><LiaStarSolid className='iconstar' /><LiaStarSolid className='iconstar' />
                      <h4>Yousef Khaled</h4>
                      <h5>Front End Wep Developer</h5>
                </div>
                <div className="col-lg-10 nora ">
            <img src={Charfour} alt="charone" className='text-center Charimage' />
            <p className='text-center 'id='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe exercitationem <br />repellat dignissimos fuga harum illo,<br /> assumenda vero unde? Veritatis?</p>
            <LiaStarSolid  className='iconstar'/><LiaStarSolid  className='iconstar'/><LiaStarSolid  className='iconstar'/><LiaStarSolid className='iconstar' /><LiaStarSolid className='iconstar' />
                      <h4>Yousef Khaled</h4>
                      <h5 >Front End Wep Developer</h5>
                </div>
                </Slider>




                      </div>







          </div>
         </div>
        
        
         
          
         
        


       
    
    
  )
}

export default About