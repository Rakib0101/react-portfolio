import React from 'react'

const Banner = () => {
  return (
    <section className="banner-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="banner-area__heading">
                                        <h1 className="text-white">
                                            UI/UX and
                                            Graphic <span>Designer.</span>
                                        </h1>
                                    </div>
                                    <div className="banner-area__text">
                                        <p className="text-white">
                                            On the other hand, we denounce with righteous indignation and dislike men who are so
                                            beguiled and demoralized by the charms.
                                        </p>
                                    </div>
                                    <a className="btn btn_yellow" href="#portfolio">View Project</a>
                                </div>
                                <div className="col-lg-6 text-md-center mt-5 mt-md-0">
                                    <img src="assets/images/Banner/hero_image.png" alt="Person" className="img-fluid overflow-hidden img_sm" />
                                    <div className="dots-image">
                                        <img src="assets/images/banner/dots.png" alt="Dots" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
  )
}

export default Banner
