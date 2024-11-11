import React from 'react';
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Subscribe.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Subscribe = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <section id='subscribe'>
      <div className='container subscribe' data-aos="zoom-in">
        <h2>حالا مشترک شوید!</h2>
        <form>
          <button>مشترک شوید</button>
          <input type='text' placeholder='ایمیل خود را وارد کنید...'/>
        </form>

        <div className='socials'>
          <div className='social-icon'> 
            <FaInstagram />
          </div>
          <div className='social-icon'> 
            <FaTwitter />
          </div>
          <div className='social-icon'> 
            <FaFacebook />
          </div>
          <div className='social-icon'> 
            <FaGooglePlus />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Subscribe;
