import React from 'react'

const Service = () => {
  return (
    <section className="section_padding services" id="services">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="section_heading text-center">My Services</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    {/* <!-- Services Item Starts Here --> */}
                                    <div className="services-item text-center">
                                        <div className="services-item__icon">
                                            <img src="assets/images/Icon/01.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <div className="services-item__heading">
                                            <h4 className="mb-0">Web Design</h4>
                                        </div>
                                        <div className="services-item__text">
                                            <p className="mb-0">
                                                Logo & Brand Identity, Art & Illustration, Visual Design, Product & Characters Design,
                                                Print Design etc.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- Services Item Ends Here --> */}
                                </div>
                                <div className="col-lg-4">
                                    {/* <!-- Services Item Starts Here --> */}
                                    <div className="services-item text-center">
                                        <div className="services-item__icon">
                                            <img src="assets/images/Icon/02.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <div className="services-item__heading">
                                            <h4 className="mb-0">UI & UX Design</h4>
                                        </div>
                                        <div className="services-item__text">
                                            <p className="mb-0">
                                                User Research, User Personas, Wireframing and Prototyping, Interaction Design &
                                                Usability Testing.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- Services Item Ends Here --> */}
                                </div>
                                <div className="col-lg-4">
                                    {/* <!-- Services Item Starts Here --> */}
                                    <div className="services-item text-center">
                                        <div className="services-item__icon">
                                            <img src="assets/images/Icon/03.png" alt="icon" className="img-fluid" />
                                        </div>
                                        <div className="services-item__heading">
                                            <h4 className="mb-0">Content Creator</h4>
                                        </div>
                                        <div className="services-item__text">
                                            <p className="mb-0">
                                                Logo & Brand Identity, Art & Illustration, Visual Design, Product & Characters Design,
                                                Print Design etc.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- Services Item Ends Here --> */}
                                </div>
                            </div>
                        </div>
                    </section>
  )
}

export default Service
