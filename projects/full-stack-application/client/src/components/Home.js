import React from 'react'

// import ImgCarousel from './ImgCarousel.js'

const Home = () => {
    return(
        <div className="home-div" style={{marginTop: '70px'}}>
          <div className="home-image-div"/>
          {/* Hey
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum veritatis autem incidunt esse, atque repudiandae tempora soluta facere eligendi sed est id assumenda! Beatae explicabo minima at incidunt quod molestiae.
          </p> */}
          <section className="carousel-pics">
            {/* <ImgCarousel/> */}
            

          </section>
          <section className="hello-me">
            <h1>Hello! I'm Mihret, </h1>
            <p>I'm a wedding, family and maternity photographer based in Washington, DC metro area and the Tristate area in North West Iowa. Check out my work and ask if you have any questions.</p>

            <hr/>
            <div className="my-img"></div>
            <hr/>
            <a href="#">
              <div className="learn-more">A little more about me </div>
            </a>
            
          </section>
          <section className="more-about-me-wanna-chat">

          </section>
          <section className="testimonials">
            <p>PORTFOLIO HIGHLIGHT</p>
            <h2>Rayna and Bryan | Sioux Falls, SD
              <div> 20 Photos</div>
              <div className="view-gallery"> VIEW GALLERY </div>
            </h2>

          </section>
          <section className="tile-img-social-media">
            <div>Browse More </div>
            <div>ABOUT</div>
            <div>WEDDINGS</div>
            <div>CONTACT</div>
            <div>THE EXPERIENCE</div>


          </section>
          <section className="follow-along-socialmedia">
            <div> font awesome</div>
            <div>tile of images from INSTAGRAM </div>

          </section>
          <section className="naviagation">
            <p>MIHRET DE JONG COPY RIGHT 2019</p>

          </section>
        </div>
    )
}




export default Home