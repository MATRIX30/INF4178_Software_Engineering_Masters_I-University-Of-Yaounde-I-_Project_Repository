import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import crimes from '../assets/img/knife.jpg';
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      islog: false,
    };
  }
  //navigate = useNavigate();

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //
      //api-connexion-add-agent.onrender.com
      await axios
        .post('http://localhost:5000/login', {
          username: this.state.username,
          password: this.state.password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code === 202) {
            alert(res.data.message);
          } else if (res.data.code === 200) {
            this.setState({ islog: true });
            alert('connecté');

            /*localStorage.setItem('id', res.data.id);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('TOKEN', 659287507);*/
            //this.navigate('/');
          } else if (res.data.code === 500) {
            alert('Echec');
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
    //const navigate = useNavigate();
    console.log(this.state.islog);
    const isAuthenticated = this.state.islog;

    // Redirection vers une autre page si l'authentification est réussie
    if (isAuthenticated) {
      console.log('ok');
      return <Redirect to="/dashboard/police" />;
    }
    return (
      <div>
        <Navbar />
        <div
          style={{
            backgroundImage: 'url(' + crimes + ')',
            backgroundSize: 'cover',
            height: '700px',
          }}
        >
          <div className="py-5 "></div>
          <div className="py-5 "> </div>
          <div className="container-fluid">
            <div className="row ">
              <div className="d-flex justify-content-center">
                <form
                  onSubmit={this.handleSubmit}
                  className="col-lg-3 border rounded "
                >
                  <h2
                    className="text-center py-3 text-white"
                    style={{ fontFamily: 'initial' }}
                  >
                    Login
                  </h2>

                  <div className="row d-flex justify-content-center mx-1">
                    <input
                      type="text"
                      name="username"
                      value={this.username}
                      onChange={this.handleChange}
                      placeholder="Enter your Username"
                      className="col-lg-8  rounded border-0"
                      style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                    />
                  </div>
                  <div className="row d-flex justify-content-center pt-3 mx-1">
                    <input
                      type="password"
                      name="password"
                      value={this.password}
                      onChange={this.handleChange}
                      placeholder="Enter your Password"
                      className="col-lg-8 rounded border-0"
                      style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                    />
                  </div>
                  <p className="text-center text-white mt-3">
                    Not have an account yet ?{' '}
                    <span>
                      <a
                        href="/register"
                        className="fst-italic"
                        style={{ textDecoration: 'none' }}
                      >
                        Register
                      </a>
                    </span>
                  </p>
                  <div className=" pt-3 pb-3 d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn col-lg-4 rounded text-light"
                      style={{ backgroundColor: 'orange' }}
                    >
                      Login
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
