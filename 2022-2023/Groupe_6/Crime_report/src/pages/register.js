import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navbar';
import crimes from '../assets/img/terrorism.jpg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password1: '',
      fullname: '',
      mobile: '',
      email: '',
      adress: '',
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
        .post('http://localhost:5000/register', {
          username: this.state.username,
          password: this.state.password,
          password1: this.state.password1,
          fullname: this.state.fullname,
          mobile: this.state.mobile,
          email: this.state.email,
          adress: this.state.adress,
        })
        .then((res) => {
          if (res.data.code === 404) {
            alert(res.data.message);
          } else if (res.data.code === 200) {
            alert('connecté');
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
        <div
          style={{
            backgroundImage: 'url(' + crimes + ')',
            backgroundSize: 'cover',
            height: '900px',
          }}
        >
          <div className="py-5 "></div>
          <div className="py-3 "> </div>
          <div className="container-fluid">
            <div className="row ">
              <div className="d-flex justify-content-center">
                <form
                  onSubmit={this.handleSubmit}
                  className="col-lg-4 card rounded "
                >
                  <h2
                    className="text-center py-3 text-black"
                    style={{ fontFamily: 'initial' }}
                  >
                    Register
                  </h2>
                  <p
                    className="text-center mx-4 text-secondary"
                    style={{ fontFamily: 'initial' }}
                  >
                    If you do not wish to report a crime anonymously, please
                    enter your details here.
                  </p>

                  <div className="row d-flex justify-content-center  mx-1">
                    <input
                      type="text"
                      name="fullname"
                      value={this.fullname}
                      onChange={this.handleChange}
                      placeholder="Enter your Fullname"
                      className="col-lg-8  rounded border-0"
                      style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                    ></input>
                  </div>
                  <div className="row d-flex justify-content-center pt-3 mx-1">
                    <input
                      name="username"
                      value={this.username}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Enter your Username"
                      className="col-lg-8  rounded border-0"
                      style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                    ></input>
                  </div>
                  <div className="row d-flex justify-content-center pt-3 mx-1">
                    <input
                      type="number"
                      name="mobile"
                      value={this.mobile}
                      onChange={this.handleChange}
                      placeholder="Enter your Mobile Phone"
                      className="col-lg-8  rounded border-0"
                      style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                    ></input>
                  </div>
                  <div className="row d-flex justify-content-center pt-3 mx-1">
                    <input
                      type="email"
                      name="email"
                      value={this.email}
                      onChange={this.handleChange}
                      placeholder="Enter your Email "
                      className="col-lg-8  rounded border-0"
                      style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                    ></input>
                  </div>
                  <div className="row d-flex justify-content-center pt-3 mx-1">
                    <input
                      type="text"
                      name="adress"
                      value={this.adress}
                      onChange={this.handleChange}
                      placeholder="Enter your Adresse"
                      className="col-lg-8  rounded border-0"
                      style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                    ></input>
                  </div>
                  <div className="row d-flex justify-content-center pt-3 mx-1">
                    <input
                      type="text"
                      name="password"
                      value={this.password}
                      onChange={this.handleChange}
                      placeholder="Enter your Password"
                      className="col-lg-8 rounded border-0"
                      style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                    ></input>
                  </div>
                  <div className="row d-flex justify-content-center pt-3 mx-1">
                    <input
                      type="text"
                      name="password1"
                      value={this.password1}
                      onChange={this.handleChange}
                      placeholder="Confirm your Password"
                      className="col-lg-8 rounded border-0"
                      style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                    ></input>
                  </div>
                  <p className="text-center text-secondary mt-3">
                    Already have an account ?{' '}
                    <span>
                      <a
                        href="/login"
                        className="fst-italic"
                        style={{ textDecoration: 'none' }}
                      >
                        Login
                      </a>
                    </span>
                  </p>
                  <div className=" pt-5 pb-3 d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn col-lg-4 rounded text-light"
                      style={{ backgroundColor: 'orange' }}
                    >
                      Register
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
