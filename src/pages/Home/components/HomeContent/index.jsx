import Hero from '../../../../components/Hero'

import './style.scss'

const HomeContent = () => {
  return (
    <div className='home'>
      <Hero
        imageSrc='https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        height='10em'
        children={
          <h1>
            Bespoke wedding ceremonies by{' '}
            <span className='hero__content-caligraphy'>Nicola</span>
          </h1>
        }
      />

      <div className='container'>
        <div className='home__content'>
          <p className='home__description'>
            Yew Choose is an independent celebrant service based in the
            beautiful county of <strong>Hampshire, UK</strong>, founded by
            Nicola Hinton. <br />
            <br />
            Nicola is a warm, engaging, and professional celebrant who is
            passionate about creating{' '}
            <strong>unique and personalised ceremonies</strong> for all
            occasions. <br />
            <br />
            With a wealth of experience in organising and delivering a wide
            range of events, Nicola's background in the hospitality and event
            management industry ensures that your special day will be handled
            with the utmost care and attention to detail. <br />
            <br />
            <strong>Yew Choose</strong> offers a range of services, including
            weddings, vow renewals, naming ceremonies, and celebrations of life.
            Nicola believes in the importance of crafting a ceremony that truly
            reflects the personalities and values of the individuals involved.{' '}
            <br />
            <br />
            As a proud member of the{' '}
            <strong>Association of Independent Celebrants</strong>, Nicola
            adheres to the highest professional standards, ensuring that your
            ceremony will be conducted with sensitivity, respect, and a touch of
            fun. <br />
            <br />
            Allow Nicola and <strong>Yew Choose</strong> to guide you through
            the process of creating a truly memorable ceremony that will be
            cherished by all in attendance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeContent
