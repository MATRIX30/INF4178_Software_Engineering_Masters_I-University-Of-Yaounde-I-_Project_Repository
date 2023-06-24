import React from 'react';
import { Facebook, Twitter, LinkedIn } from '@material-ui/icons';

const ExpertBox = ({userImgUrl, expertName, description, facebookUrl, twitterUrl, linkedinUrl}) => {

    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp rounded" data-wow-delay="0.1s">
            <div className="team-item shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="overflow-hidden">
                    <img className="img-fluid w-100" src={userImgUrl} alt="" style={{ height: 290 }} />
                </div>
                <div className="position-relative d-flex justify-content-center" style={{ marginTop: -23 }}>
                    <div className="d-flex justify-content-center pt-2 px-1 rounded" style={{ backgroundColor: '#f8f9fa' }}>
                        <a className="btn btn-success mx-1" href={facebookUrl}><Facebook /></a>
                        <a className="btn btn-success mx-1" href={twitterUrl}><Twitter /></a>
                        <a className="btn btn-success mx-1" href={linkedinUrl}><LinkedIn /></a>
                    </div>
                </div>
                <div className="text-center p-4">
                    <h5 className="mb-0">{expertName}</h5>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
}

export default ExpertBox;
