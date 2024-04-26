// Features
import React from 'react';
import './Features.css';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          our
          {' '}
          <span>features</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="image/feature-img-1.png" alt="" />
            <h3>fresh and organic</h3>
            <p>
             "Fresh, organic, and locally sourced—quality ingredients for wholesome meals."</p>
            <a href="/" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="image/feature-img-2.png" alt="" />
            <h3>free delivery</h3>
            <p>"Enjoy free delivery on all orders—shop now for convenience and savings!"</p>
            <a href="/" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="image/feature-img-3.png" alt="" />
            <h3>easy payment</h3>
            <p>
               "Experience easy payment options for hassle-free shopping and checkout."</p>
            <a href="/" className="btn">read more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
