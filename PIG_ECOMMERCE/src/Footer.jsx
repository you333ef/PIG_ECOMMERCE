import React from 'react';
import './footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { TbShoppingCartDollar } from "react-icons/tb";
import footerone from './assets/footer visa/1.png';
import footertwo from './assets/footer visa/2.png';
import footerthree from './assets/footer visa/3.png';

const Footer = () => {
  return (
<div>
<footer className="bg-body-tertiary text-center custom-navbar">
  <div className="container p-4">
    <section className="mb-4">
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1 " href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
      <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
    </section>

    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2"><strong><TbShoppingCartDollar className='FAFY'/></strong></p>
          </div>
          <div className="col-md-5 col-12">
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form5Example24" className="form-control" />
              <label className="form-label" htmlFor="form5Example24">Email address</label>
            </div>
          </div>
          <div className="col-auto">
            <button data-mdb-ripple-init type="submit" className="btn btn-outline mb-4">Subscribe</button>
          </div>
        </div>
      </form>
    </section>

    <section className="mb-4">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.</p>
    </section>

    <section className="">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase TXT" style={{fontWeight:700}}  >Bravo Company</h5>
          <ul className="list-unstyled mb-0">
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita alias, itaque rerum quia exercitationem iure unde perferendis doloribus mollitia laborum ut nostrum recusandae non possimus.</p></li>
           

     
          </ul>
        </div>
     
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase TXT">Useful Links</h5>
          <ul className="list-unstyled KOLLO">
          <li><a className="text-body" href="#!"><i className="fab fa-facebook-f"></i></a></li>
            <li><a className="text-body" href="#!"><i className="fab fa-twitter"></i> </a></li>
            <li><a className="text-body" href="#!"><i className="fab fa-google"></i></a></li>
            <li><a className="text-body" href="#!"><i className="fab fa-instagram"></i></a></li>
            <li><a className="text-body" href="#!"> <i className="fab fa-github"></i> </a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase TXT">Social Media</h5>
          <ul className="list-unstyled mb-0 KOLLO">
          <li><a className="text-body" href="#!">Bravo Company</a></li>
            <li><a className="text-body" href="#!"> Home</a></li>
            <li><a className="text-body" href="#!"> About</a></li>
            <li><a className="text-body" href="#!"> Shop</a></li>
            <li><a className="text-body" href="#!"> Contact</a></li>
          </ul>
        </div>
        
      </div>
    </section>
  </div>
  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Yousef@Khaled.com</a>
  </div>
</footer>
</div>
  );
}

export default Footer;
