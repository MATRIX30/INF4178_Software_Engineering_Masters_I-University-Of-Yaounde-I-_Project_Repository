import React from 'react'

const TestimonialItem = ({imageUrl, userName, userStatus, testimonial}) => {

    return (
        <div className="testimonial-item text-center">
            <img className="border rounded-circle p-2 mx-auto mb-3" src={imageUrl} style={{width: 80, height: 80}} />
            <h5 className="mb-0">{userName}</h5>
            <p style={{ color: '#229f0d' }}>{userStatus}</p>
            <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0" style={{ color: '#80859d', fontWeight: 'normal' }}>
                    {testimonial}
                </p>
            </div>
        </div>
    )
}

export default TestimonialItem;
