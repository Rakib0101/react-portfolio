import React from 'react'

const ServiceCard = () => {
    return ( 
        <div className="services-item text-center">
            <div className="services-item__icon">
                <img src="assets/images/Icon/01.png" alt="icon" className="img-fluid" />
            </div>
            <div className="services-item__heading">
                <h4 className="mb-0">Web Design</h4>
            </div>
            <div className="services-item__text">
                <p className="mb-0">
                    Logo & Brand Identity, Art & Illustration, Visual Design, Product & Characters Design, Print Design etc.
                </p>
            </div>
        </div>
    )
}

export default ServiceCard
