import React, { useEffect, useState } from 'react';
import './style.scss';

function Hero({ imageSrc, videoSrc, height, children }) {


  return (
    <div className="hero" style={{ height: height }}>
      {videoSrc ? (
        <video className="hero__video" autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          className="hero__image"
          src={imageSrc}
          alt="Hero background"
        />
      )}
      <div className="hero__content">{children}</div>
    </div>
  );
}

export default Hero;
