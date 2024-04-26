import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Products() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">
        our
        {' '}
        <span>products</span>
      </h1>
      <div className="products-slider slider">
        <Slider {...settings}>
          <div className="box">
            <img src="image/product-1.png" alt="" />
            <h3>fresh orange</h3>
            <div className="price">₹4.99/ -- 10.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              add to cart
            </button>
          </div>
          <div className="box">
            <img src="image/product-2.png" alt="" />
            <h3>fresh onion</h3>
            <div className="price">₹4.99/ -- 10.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              add to cart
            </button>
          </div>
          <div className="box">
            <img src="image/product-3.png" alt="" />
            <h3>fresh Cauliflower</h3>
            <div className="price">₹4.99/ -- 10.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              add to cart
            </button>
          </div>
          <div className="box">
            <img src="image/product-4.png" alt="" />
            <h3>fresh cabage</h3>
            <div className="price">₹4.99/ -- 10.99/-</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <button type="button" className="btn">
              add to cart
            </button>
          </div>
          <div className="box">
                <img src="image/product-5.png" alt="" />
                <h3>fresh potato</h3>
                <div className="price">₹4.99/ -- 10.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
              <div className="box">
                <img src="image/product-6.png" alt="" />
                <h3>Lays</h3>
                <div className="price">₹12.99/ -- 10.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
              <div className="box">
                <img src="image/product-7.png" alt="" />
                <h3>Maggi</h3>
                <div className="price">₹9.99/ -- 50.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
        </Slider>
      </div>
    </section>
  );
}
