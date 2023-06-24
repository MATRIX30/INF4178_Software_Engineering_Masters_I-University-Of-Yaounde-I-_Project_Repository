import React from 'react';
import { Sidebar } from '../components/SidebarP';
import { Navigation } from '../components/navbarDash';
import db from '../assets/img/db.jpg';
import Piechart1 from '../components/Piechart/PieChart1';
import Piechart2 from '../components/Piechart/PieChart2';
import Piechart3 from '../components/Piechart/PieChart3';
import Piechart4 from '../components/Piechart/PieChart4';

export class Police extends React.Component {
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
            <div className="col-lg-4 ">
              <Piechart1 />
            </div>
            <div className="col-lg-4 ">
              <Piechart4 />
            </div>{' '}
          </div>
        </div>
      </div>
    );
  }
}
export default Police;
