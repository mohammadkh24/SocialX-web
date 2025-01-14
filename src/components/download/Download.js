import React from 'react';
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import './Download.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Download() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <section id='download'>
      <div className='container download' data-aos="fade-up">
        <div className='download-title'>
          <h2>دانلود اپلیکیشن ما</h2>
          <p>برنامه های ما برای دانلود در همه فروشگاه ها موجود است</p>
        </div>
        <div className='download-apps'>
          <div className='download-app'>
            <FaApple />
            <p>آیفون</p>
          </div>
          <div className='download-app'>
            <FaWindows />
            <p>ویندوز</p>
          </div>
          <div className='download-app'>
            <FaAndroid />
            <p>اندروید</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download;
