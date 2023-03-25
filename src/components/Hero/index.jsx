import LazyHero from 'react-lazy-hero'

function Hero ({ imageSrc, videoSrc, minHeight, children }) {
  return (
    <LazyHero
      imageSrc={imageSrc}
      videoSrc={videoSrc}
      isCentered={true}
      isFixed={true}
      minHeight={minHeight}
    >
      {children}
    </LazyHero>
  )
}

export default Hero
