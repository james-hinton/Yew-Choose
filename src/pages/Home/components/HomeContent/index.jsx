import Hero from '../../../../components/Hero'

import './style.scss'

const HomeContent = () => {
  return (
    <div className='home'>
      <Hero
        imageSrc='https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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
            <strong>Yew Choose</strong> offers a range of services, including
            weddings, vow renewals, naming ceremonies, and celebrations of life.
            Nicola believes in the importance of crafting a ceremony that truly
            reflects the personalities and values of the individuals involved.{' '}
            <br />
            <br />
            In addition to her expertise as a celebrant, Nicola can also provide
            assistance with selecting the{' '}
            <strong>
              perfect venue, coordinating with other vendors, and even
              recommending local accommodations for your guests
            </strong>
            . Her extensive knowledge of Hampshire and the surrounding areas
            ensures that your special day will be truly one-of-a-kind.
            <br />
            <br />
            She understands the significance of incorporating cultural
            traditions and <strong> family customs into your ceremony</strong>,
            ensuring that every element is meaningful and tailored to your
            desires. Nicola is dedicated to making each ceremony a beautiful
            representation of the love and commitment shared by those involved.
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
