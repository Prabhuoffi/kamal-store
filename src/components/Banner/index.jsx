// Banner
import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h3>
         Welcome
          {' '}
          <span>to</span>
          {' '}
          Kamal store
        </h3>
        <p>
        Fresh vegetables and cooking essentials
        </p>
        <button type="button" className="btn">
          shop now
        </button>
      </div>
    </section>
  );
}
