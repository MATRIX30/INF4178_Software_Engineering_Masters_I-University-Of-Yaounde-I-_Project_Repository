import React from 'react';
import { PublicOutlined, SchoolOutlined, BookSharp, SpaOutlined } from '@material-ui/icons';
import ServiceItem from './ServiceItem';


const Services = () => {


    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    <ServiceItem
                        title='Skilled Instructors' 
                        description='Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
                        icon={
                            <SchoolOutlined className='text-success' />
                        }
                    />
                    <ServiceItem
                        title='Online Courses' 
                        description='Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
                        icon={
                            <PublicOutlined className='text-success' />
                        }
                    />
                    <ServiceItem
                        title='Agricultural Projects' 
                        description='Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
                        icon={
                            <SpaOutlined className='text-success' />
                        }
                    />
                    <ServiceItem
                        title='Book Library' 
                        description='Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
                        icon={
                            <BookSharp className='text-success' />
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;