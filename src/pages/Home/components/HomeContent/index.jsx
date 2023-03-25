import Hero from '../../../../components/Hero'

import './style.scss'

const HomeContent = () => {
  return (
    <div className='home'>
      <Hero
        imageSrc='hero.jpg'
        minHeight='20vh'
      />

      <div className='container'>
        <div className='home__content'>
          <p className='home__description'>
            Yew Choose is a local celebrant based in Hampshire, dedicated to
            creating unique, meaningful, and memorable wedding ceremonies that
            reflect your personal style, beliefs, and values.
            <br />
            <br />
            We believe that your wedding day is one of the most important and
            memorable events of your life, and we are committed to helping you
            make it as special and beautiful as possible.
            <br />
            <br />
            Our experienced and passionate celebrants work closely with you to
            understand your vision, preferences, and personality, and craft a
            bespoke ceremony that truly represents who you are and what you
            stand for.
            <br />
            <br />
            Whether you're planning a traditional ceremony, a modern
            celebration, or something in between, we have the expertise,
            creativity, and flexibility to bring your dream wedding to life.
            <br />
            <br />
            At Yew Choose, we pride ourselves on our attention to detail,
            professionalism, and customer satisfaction.
            <br />
            <br />
            We understand that every wedding is unique and requires a tailored
            approach, which is why we offer a range of services and options to
            suit your needs and budget, including consultations, custom vows,
            symbolic rituals, and more.
            <br />
            <br />
            We also provide guidance, support, and inspiration throughout the
            planning process, and are always available to answer any questions
            or concerns you may have.
            <br />
            <br />
            Our celebrants are fully trained, qualified, and experienced in
            performing weddings and other ceremonies, and are passionate about
            creating an inclusive, warm, and welcoming atmosphere that brings
            people together and celebrates love in all its forms.
            <br />
            <br />
            Choose Yew Choose for your special day, and let us help you create a
            wedding that is as unique, beautiful, and memorable as your love
            story.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeContent
