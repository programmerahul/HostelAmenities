import React, { Component } from "react";
const { getHostels } = require("../services/hostelService");
class Hostel extends Component {
  state = {
    hostels: [],
  };
  async componentDidMount() {
    const hostels = await getHostels();
    this.setState({ hostels });
  }
  onHostelClick = (hostel) => {
    this.props.history.push(`/hostels/${hostel._id}`);
  };
  handleNewHostel = () => {
    this.props.history.push("/new");
  };
  handleMyHostel = (user) => {
    this.props.history.push(`/myhostel`);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.user && (
          <React.Fragment>
            <button onClick={this.handleNewHostel} className="btn btn-outline-success ml-4rem">
              New Hostel
            </button>
            <button
              onClick={() => this.handleMyHostel(this.props.user)}
              className="btn btn-outline-warning ml-2"
            >
              Edit Hostel
            </button>
          </React.Fragment>
        )
        }
        {this.state.hostels.length === 0 ? (
          <h1>Login/Register to add, delete or update hostel details</h1>
        ) : (
          ""
        )}
        <div className="container mt-4">
          <div className="row">
            {this.state.hostels.map((hostel) => (
              <div className="col-md-6">
                <div className="card m-2">
                  <div className="card-body">
                    <h5 className="card-title">{hostel.name}</h5>
                    <p className="card-text">{hostel.description.length > 210 ? (hostel.description.substring(0, 210) + "...") : hostel.description}</p>
                    <div className="text-center">
                      <button
                        onClick={() => this.onHostelClick(hostel)}
                        className="btn btn-outline-secondary"
                        style={{ width: "90%" }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hostel;
