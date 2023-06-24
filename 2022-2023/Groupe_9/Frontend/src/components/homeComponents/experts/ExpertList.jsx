import React from 'react';
import ExpertBox from './ExpertBox';
import img from '../../../assets/images/poivron.jpg'
import jugalux from '../../../assets/photos/jugalux.jpeg'
import kirito from '../../../assets/photos/kirito.jpeg'
import doyen from '../../../assets/photos/doyen.jpg'
import essi from '../../../assets/photos/essi.jpeg'


const ExpertList = () => {

    return (
        <div className="container-xxl pb-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-success px-3">Instructors</h6>
                    <h3 className="mb-5">Expert Instructors</h3>
                </div>
                <div className="row g-4">
                    <ExpertBox 
                        expertName='Miessoc Eric'
                        description='Cereals specialist'
                        userImgUrl={doyen}
                        facebookUrl=''
                        twitterUrl=''
                        linkedinUrl=''
                    />
                    <ExpertBox 
                        expertName='Tchinde Cyrille'
                        description='Vegetables specialist'
                        userImgUrl={kirito}
                        facebookUrl=''
                        twitterUrl=''
                        linkedinUrl=''
                    />
                    <ExpertBox 
                        expertName='Essi Junior'
                        description='Tubers specialist'
                        userImgUrl={essi}
                        facebookUrl=''
                        twitterUrl=''
                        linkedinUrl=''
                    />
                    <ExpertBox 
                        expertName='Gaëlle Tamho'
                        description='Fruits specialist'
                        userImgUrl={jugalux}
                        facebookUrl=''
                        twitterUrl=''
                        linkedinUrl=''
                    />
                </div>
            </div>
        </div>
    );
}

export default ExpertList;
