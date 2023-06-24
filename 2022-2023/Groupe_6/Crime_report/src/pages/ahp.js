import React from 'react';
import { Sidebar } from '../components/SidebarP';
import { Navigation } from '../components/navbarDash';
import db from '../assets/img/db.jpg';
import Piechart1 from '../components/Piechart/PieChart1';
import Piechart2 from '../components/Piechart/PieChart2';
import Piechart3 from '../components/Piechart/PieChart3';
import Piechart4 from '../components/Piechart/PieChart4';

export class AHP extends React.Component {
   
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
            <div className="col-lg-9 pt-5 mt-5">
              <table class="table  table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Crime Name</th>
                  <th scope="col">Crime Place</th>
                  <th scope="col">Crime Gravity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Terrosisim</td>
                  <td>Nkoabang</td>
                  <td>Very serious</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Woman aggression</td>
                  <td>Etoudi</td>
                  <td>serious</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td> Children kidnapping</td>
                  <td>Jouvence</td>
                  <td>No big deal</td>
                </tr>
                
              </tbody>
            </table>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
export default AHP;
