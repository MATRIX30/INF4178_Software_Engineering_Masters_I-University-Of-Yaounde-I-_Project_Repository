import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import fond from '../assets/img/enquete.jpg';
import Navbar from '../components/navbar';
import axios from 'axios';

export class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pays: '',
      ville: '',
      quartier: '',
      type_crime: '',
      nbre_victime: '',
      gravité: '',
      image: '',
      message: '',
      description: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:5000/insert', {
          pays: this.state.pays,
          ville: this.state.ville,
          quartier: this.state.quartier,
          type_crime: this.state.type_crime,
          nbre_victime: this.state.nbre_victime,
          gravité: this.state.gravité,
          image: this.state.image,
          message: this.state.message,
          description: this.state.description,
        })
        .then((res) => {
          if (res.data.code === 404) {
            alert(res.data.message);
          } else if (res.data.code === 200) {
            alert('Ajout du crime avec succes');
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('TOKEN', 659287507);
          } else if (res.data.code === 500) {
            alert(res.data.message);
          }
          /*if (res.data.code === 200) {
              alert(res.data.message);
              console.log(res.data.data);
            }*/
          console.log(res.data.message);
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="py-5 "></div>
        <div className="mx-5 p-3">
          <div className="row">
            <div
              className="col-lg-5"
              style={{
                backgroundImage: 'url(' + fond + ')',
                height: 960,
                backgroundSize: 'cover',
              }}
            >
              {' '}
            </div>
            <div className="col-lg-5 offset-lg-1 card shadow ">
              <div className="row pt-3 mx-1">
                <h3 className="pt-3 text-center">
                  {' '}
                  Report the crime in detail{' '}
                </h3>
                <div className="row text-center pt-3">
                  <p className="text-secondary ">
                    {' '}
                    Please, give all information you have for a better
                    intervention
                  </p>
                </div>
                <form className="  rounded " onSubmit={this.handleSubmit}>
                  <label className="text mt-1"> Crime Type</label>
                  <input
                    type="text"
                    id="type_crime"
                    value={this.type_crime}
                    onChange={this.handleChange}
                    name="type_crime"
                    placeholder="Enter the Crime Type 'Ex: Terrorism'"
                    className="col-lg-12 mt-1 rounded border-0"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  ></input>
                  <select
                    class="form-select form-select"
                    id="type_crime"
                    name="type_crime"
                    onChange={this.handleChange}
                    value={this.gravité}
                    aria-label=".form-select-lg example"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  >
                    <option selected>Open this select menu</option>
                    <option value="Vol">Vol</option>
                    <option value="Viol">Viol</option>
                    <option value="Meurtre">Meutre</option>
                  </select>
                  <label className="text mt-2">City</label>
                  <select
                    class="form-select form-select"
                    id="ville"
                    name="ville"
                    onChange={this.handleChange}
                    value={this.ville}
                    aria-label=".form-select-lg example"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  >
                    <option selected>Open this select menu</option>
                    <option value="Yaoundé">Yaoundé</option>
                    <option value="Bafoussam">Bafoussam</option>
                    <option value="Douala">Douala</option>
                  </select>

                  <label className="text mt-2"> Quartier</label>
                  <input
                    type="text"
                    id="quartier"
                    value={this.quartier}
                    name="quartier"
                    onChange={this.handleChange}
                    placeholder="Enter the district"
                    className="col-lg-12 mt-1 rounded border-0"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  ></input>
                  <label className="text mt-2">
                    {' '}
                    Victim number (Estimation)
                  </label>
                  <input
                    type="number"
                    id="nbre_victime"
                    name="nbre_victime"
                    onChange={this.handleChange}
                    value={this.number}
                    placeholder="Enter the Victim number"
                    className="col-lg-12 mt-1 rounded border-0"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  ></input>
                  <label className="text mt-2">Crime's gravity</label>
                  <select
                    class="form-select form-select"
                    id="gravité"
                    name="gravité"
                    onChange={this.handleChange}
                    value={this.gravité}
                    aria-label=".form-select-lg example"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">No big deal</option>
                    <option value="2">Serious</option>
                    <option value="3">Very serious</option>
                  </select>
                  <label className="text mt-2">Add image (facultative)</label>
                  <input
                    type="file"
                    value={this.image}
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={this.handleChange}
                    multiple="multiple"
                  ></input>
                  <p className="text mt-4"> Description (max 500 caracters)</p>
                  <textarea
                    className="card shadow col-lg-12"
                    id="description"
                    value={this.description}
                    name="description"
                    onChange={this.handleChange}
                    placeholder="Add Text"
                    style={{ height: 150 }}
                  ></textarea>

                  <div className="mt-4 mb-4 d-flex justify-content-center row">
                    <button
                      type="submit"
                      className="btn rounded col-lg-5 text-white "
                      style={{ backgroundColor: 'orange' }}
                    >
                      {' '}
                      Send Crime Report
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
