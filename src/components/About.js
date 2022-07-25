import React from 'react'

const About = () => {
  return (
    <section className="section_padding about-me" id="about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 order-2 order-md-2 order-lg-1 text-center text-lg-left mb-0">
                    <div className="about-me__image mb-0">
                        <img src="assets/images/About/me.jpg" alt="Kevin" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-md-1 order-lg-2 mb-5 mb-md-5 mb-lg-0">
                    <div className="about-me__info">
                        <h3>
                            Hello, I’m Kevin Gilbert. A ui/ux and graphics Dsigner.
                        </h3>
                        <p>
                            Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. Duis
                            rutrum non risus in imperdiet. Proin molestie accumsan nulla sit amet mattis. Ut vel
                            tristique neque. Praesent purus eros, aliquet sit amet venenatis in, sodales in odio.
                            Curabitur ac ligula et purus cursus vulputate accumsan sit amet erat. Vestibulum ac mauris
                            ut nisl maximus porta eu a libero. In hac habitasse platea dictumst. Proin augue urna,
                            pretium vel mauris sed.
                        </p>
                        <p>
                            Aliquam fermentum, massa eget volutpat vehicula, velit dolor mattis turpis, in sollicitudin
                            lectus ligula quis ex.
                        </p>
                        <div className="d-flex">
                            <button className="btn mr-2">Hire Me</button>
                            <button className="btn btn_white">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-me__dots">
            <img src="assets/images/about/dots.png" alt="Dots" className="img-fluid" />
        </div>
        <div className="about-me__triangle">
            <img src="assets/images/about/triangle.png" alt="Triangle" className="img-fluid" />
        </div>
    </section>
  )
}

export default About
