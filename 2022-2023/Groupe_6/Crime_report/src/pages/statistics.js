import React from 'react';
import { Sidebar } from '../components/SidebarP';
import { Navigation } from '../components/navbarDash';
import db from '../assets/img/db.jpg';
import Fond from '../assets/img/knife.jpg';
import about from '../assets/img/police.jpg';
import crime from '../assets/img/weapon.jpg';
import crimes from '../assets/img/crimes.jpg';
import enquete from '../assets/img/enquete.jpg';

export class Statistics extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid ">
          <div className="">
            <Navigation />
          </div>

          <div className="row ">
            <div className="col-lg-3 p-0">
              <Sidebar />
            </div>
            <div className="col-lg-7 pt-5 mt-5">
              <div className="row">
                <div className="col-lg-4 py-2 pb-5">
                  <div className="card bg-dark shadow rounded m-1">
                    <h6 className="mx-1 text-center text-white my-2">
                      All denonced Crimes{' '}
                    </h6>
                    <h1
                      className="mx-1 text-center "
                      style={{ color: 'orange', height: '68px' }}
                    >
                      2500
                    </h1>
                  </div>
                </div>
                <div className="col-lg-4 py-2 pb-5">
                  <div className="card bg-dark shadow rounded m-1">
                    <h6 className="mx-1 text-center text-white my-2">
                      All anonymous denonced Crimes{' '}
                    </h6>
                    <h1
                      className="mx-1 text-center "
                      style={{ color: 'orange' }}
                    >
                      500
                    </h1>
                  </div>
                </div>
                <div className="col-lg-4 py-2 pb-5">
                  <div className="card bg-dark shadow rounded m-1">
                    <h6 className="mx-1 text-center text-white my-2">
                      All Users
                    </h6>
                    <h1
                      className="mx-1 text-center "
                      style={{ color: 'orange ', height: '68px' }}
                    >
                      1000
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Statistics;
