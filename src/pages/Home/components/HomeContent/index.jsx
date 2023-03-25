import Hero from '../../../../components/Hero'

import './style.scss'

const HomeContent = () => {
  return (
    <div className='home'>
      <Hero
        imageSrc='https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        videoSrc='teamsaccess.mp4'
        minHeight='15vh'
      />

      <div className='home__content'>
        <p className='home__description'>
          Welcome to Yew Choose, your go-to source for bespoke and meaningful
          wedding ceremonies. We are dedicated to helping you create a wedding
          that truly reflects your values, beliefs, and personalities, and
          celebrates your love story in a unique and unforgettable way.
          <br />
          <br />
          Our experienced and friendly celebrants will work closely with you to
          craft a personalized ceremony that captures the essence of your
          relationship and resonates with you and your guests. Whether you're
          planning a traditional ceremony, a modern celebration, or something in
          between, we have the skills, expertise, and passion to make your
          wedding dreams a reality.
          <br />
          <br />
          At Yew Choose, we believe that every wedding is a special and sacred
          event that deserves to be treated with respect, care, and attention to
          detail. We offer a range of services and options to suit your
          preferences and budget, including pre-wedding consultations, custom
          vows, symbolic rituals, and more.
          <br />
          <br />
          We also understand that planning a wedding can be stressful and
          overwhelming, which is why we strive to make the process as smooth,
          enjoyable, and memorable as possible. From the initial consultation to
          the final ceremony, we will be there for you every step of the way,
          providing guidance, support, and inspiration.
          <br />
          <br />
          So why choose us for your wedding? Because at Yew Choose, we don't
          just create ceremonies, we create experiences. We are passionate about
          helping couples express their love, honor their commitment, and create
          lasting memories that will stay with them for a lifetime. Let us be a
          part of your special day, and see why Yew Choose is the perfect choice
          for your perfect day.
          <br />
          <br />
        </p>
      </div>
    </div>
  )
}

export default HomeContent
