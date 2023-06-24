import React from 'react';

const ServiceItem = ({title, description, icon}) => {

    return (
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item text-center pt-3">
                <div className="p-4">
                    {icon}
                    <h5 className="mb-3 mt-4" style={{ color: '#344767' }}>{title}</h5>
                    <p style={{ color: '#80859d', fontWeight: 'normal' }}>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;
