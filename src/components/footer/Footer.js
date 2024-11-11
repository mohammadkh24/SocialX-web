import React from 'react';
import './Footer.css';
import { FaMarker, FaPhoneAlt } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container footer'>
        <div className='quick-access'>
          <h4>لینک های مفید</h4>
          <div className='footer-links'>
            <a href='#'>&bull; پشتیبانی</a>
            <a href='#'>&bull; درباره ما</a>
            <a href='#'>&bull; آموزش</a>
            <a href='#'>&bull; هاستینگ</a>
            <a href='#'>&bull; پیامرسان</a>
          </div>
        </div>
        <div className='support'>
          <h4>پشتیبانی</h4>
          <div className='footer-links'>
            <a href='#'>&bull; پشتیبانی</a>
            <a href='#'>&bull; درباره ما</a>
            <a href='#'>&bull; آموزش</a>
            <a href='#'>&bull; هاستینگ</a>
            <a href='#'>&bull; پیامرسان</a>
          </div> 
        </div>
        <div className='contact'>
          <h4>راه های ارتباطی</h4>
          <div className='footer-contact'>
            <p><FaMarker /> &nbsp; آدرس : تهران سمت راست</p>
            <p><FaPhoneAlt /> &nbsp; تلفن : 09963381210</p>
            <p><FaFax /> &nbsp; فکس : 091276532</p>
            <p><FaEnvelope /> &nbsp; ایمیل :  @gmail.com</p>
            <p><FaGlobe /> &nbsp; وبسایت :  khataei.ir</p>
          </div>
        </div>
        <div className='footer-logo'>
          <img src={logo}></img>
          <p>&copy; khataei2024</p>
        </div>
      </div>
    </section>
  )
};

export default Footer;
