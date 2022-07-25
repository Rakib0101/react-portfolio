import React from 'react'

const Portfolio = () => {
  return (
    <section className="my-portfolio" id="portfolio">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="section_heading text-center">My Portfolio</h2>
                                </div>
                            </div>
                            <div className="row flex-wrap">
                                <div className="column">
                                    <img src="assets/images/portfolio//01.jpg" alt="Project" className="img-fluid" />
                                    <img src="assets/images/portfolio//04.jpg" alt="Project" className="img-fluid" />
                                    <img src="assets/images/portfolio//07.jpg" alt="Project" className="img-fluid" />
                                </div>

                                <div className="column">
                                    <img src="assets/images/portfolio//02.jpg" alt="Project" className="img-fluid" />
                                    <img src="assets/images/portfolio//05.jpg" alt="Project" className="img-fluid" />
                                    <img src="assets/images/portfolio//08.jpg" alt="Project" className="img-fluid" />
                                </div>

                                <div className="column">
                                    <img src="assets/images/portfolio//03.jpg" alt="Project" className="img-fluid" />
                                    <img src="assets/images/portfolio//06.jpg" alt="Project" className="img-fluid" />
                                    <img src="assets/images/portfolio//09.jpg" alt="Project" className="img-fluid" />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12 mt-lg-5 mt-md-0 mt-2 text-center">
                                    <a href="#" className="btn">View All Project</a>
                                </div>
                            </div>
                        </div>
                    </section>
  )
}

export default Portfolio
