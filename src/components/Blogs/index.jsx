import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

import './Blogs.css';

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our
        {' '}
        <span>blogs</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/blog-1.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </a>
            </div>
            <h3>Fresh And Organic Vegetables And Fruits</h3>
            <p>
            Discover the latest tips and tricks for selecting and preparing fresh, organic vegetables and fruits on our blog
            . From farm to table, we're here to help you make the most of nature's bounty
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-2.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2022
              </a>
            </div>
            <h3>Cooking Essentials</h3>
            <p>
            Unlock the secrets of culinary success with our guide to essential cooking tools and ingredients. From spices to utensils, 
            we've got everything you need to elevate your kitchen creations.
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}
