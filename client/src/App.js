import { Redirect, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/common/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import Logout from "./components/logout";
import background from "./components/background.jpg";
import Hostel from "./components/hostel";
import OneHostel from "./components/onehostel";
import NewHostel from "./components/newHostel";
import MyHostel from "./components/myHostels";
class App extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <div
          className="backGround"
          style={{ backgroundImage: `url(${background})` }}
        >
          <NavBar user={user} />
          <main className="container">
            <Switch>
              <Route path="/logout" component={Logout} />
              <Route
                path="/new/:id"
                render={(props) => (
                  <NewHostel {...props} user={this.state.user} />
                )}
              />
              <Route
                path="/new"
                render={(props) => (
                  <NewHostel {...props} user={this.state.user} />
                )}
              />
              <Route
                path="/myhostel"
                render={(props) => (
                  <MyHostel {...props} user={this.state.user} />
                )}
              />
              <Route
                path="/hostels/:id"
                render={(props) => (
                  <OneHostel {...props} user={this.state.user} />
                )}
              />
              <Route
                path="/hostels"
                render={(props) => <Hostel {...props} user={this.state.user} />}
              />
              <Route path="/login" component={LoginForm} />
              {this.state.user && <Route path="/register" component={RegisterForm} />}
              <Redirect from="/" exact to="/hostels" />
              <Route path="/notFound" component={NotFound} />
              <Redirect to="/notFound"></Redirect>
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
