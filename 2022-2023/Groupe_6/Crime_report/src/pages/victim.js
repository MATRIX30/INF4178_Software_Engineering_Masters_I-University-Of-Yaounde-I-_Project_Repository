import React from 'react';
import { Sidebar } from '../components/SidebarP';
import { Navigation } from '../components/navbarDash';
import db from '../assets/img/db.jpg';
import Maps from '../components/Maps/maps';
export class Victim extends React.Component {
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
            <div className="col-lg-7 ">
              <Maps />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Victim;
