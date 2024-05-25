import React from 'react'
import '../contact.css'
import map from '../assets/New folder/IMG-20240510-WA0002.jpg'
const Contact = () => {
  return (
    <div className='container'>
<h3 className='text-center contentatitle'>Contact Us</h3>
<div className="row prop">
  <div className="col-lg-6 mop">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d878726.6946640175!2d31.73237465!3d30.64730925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1715428111784!5m2!1sar!2seg"  ></iframe>
  </div>
  <div className="col-lg-5 hoho">
 
<select class="form-control ptpt">
  <option> Your Name..</option>
</select>
<select class="form-control ptpt">
  <option>Your Email..</option>
</select>
<select class="form-control ptpt">
  <option>Your Phone</option>
</select>
<select class="form-control ptpt">
  <option>Your Message</option>
</select>
<select class="form-control ptpt">
  <option> Your Suggest..</option>
</select>
<button className=' btn btn-primary pom'>Send Form</button>
  </div>
</div>
</div>
  )
};

export default Contact