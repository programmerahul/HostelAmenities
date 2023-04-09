import React, { Component } from "react";
import { getHostels } from "../services/hostelService";
import { deleteHostel } from "../services/hostelService";
class MyHostel extends Component {
  state = {
    hostels: [],
  };
  async componentDidMount() {
    let hostels = await getHostels();
    hostels = hostels.filter((hostel) => {
      return hostel.author._id === this.props.user._id;
    });
    this.setState({ hostels });
  }
  handleDelete = async (hostel) => {
    await deleteHostel(hostel._id);
    window.location = "/myhostel";
  };
  handleUpdate = async (hostel) => {
    this.props.history.push(`/new/${hostel._id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.hostels.map((hostel) => (
            <div className="card col-md-4 m-2 ">
              <div className="card-body">
                <h5 className="card-title">{hostel.name}</h5>
                <p className="card-text">{hostel.description}</p>
                <button
                  onClick={() => this.handleUpdate(hostel)}
                  className="btn btn-primary"
                >
                  Update
                </button>
                <button
                  onClick={() => this.handleDelete(hostel)}
                  className="btn btn-primary ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyHostel;
