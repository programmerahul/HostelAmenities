import React, { Component } from "react";
import { newHostel } from "../services/hostelService";
import { getHostel } from "../services/hostelService";
import { updateHostel } from "../services/hostelService";
class NewHostel extends Component {
  state = {
    name: "",
    description: "",
    amenities: "",
    steps: "",
  };
  async componentDidMount() {
    if (this.props.match.params.id) {
      const hostel = await getHostel(this.props.match.params.id);
      const amenities = hostel.amenities.toString();
      const steps = hostel.steps.toString();
      this.setState({
        name: hostel.name,
        description: hostel.description,
        amenities: amenities,
        steps: steps,
      });
    }
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleDesChange = (event) => {
    this.setState({ description: event.target.value });
  };
  handleIngChange = (event) => {
    this.setState({ amenities: event.target.value });
  };
  handleStepsChange = (event) => {
    this.setState({ steps: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const hostel = {};
    hostel.name = this.state.name;
    hostel.description = this.state.description;
    hostel.amenities = this.state.amenities.split(",");
    console.log(this.state.steps);
    hostel.steps = this.state.steps.split(",");
    const id = this.props.match.params.id;
    if (id) {
      console.log(id, hostel);
      await updateHostel(id, hostel);
    } else {
      await newHostel(hostel);
    }
    window.location = "/hostels";
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            onChange={(e) => this.handleNameChange(e)}
            type="text"
            value={this.state.name}
            class="form-control"
            id="name"
            placeholder="Enter name of hostel"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input
            onChange={(e) => this.handleDesChange(e)}
            value={this.state.description}
            type="text"
            class="form-control"
            id="description"
            placeholder="Enter description about hostel"
          />
        </div>
        <div class="form-group">
          <label for="amenity">Amenities</label>
          <input
            onChange={(e) => this.handleIngChange(e)}
            value={this.state.amenities}
            type="text"
            class="form-control"
            id="amenity"
            placeholder="Enter amenities provided by hostel (seperated by , )"
          />
        </div>
        <div class="form-group">
          <label for="steps">Remarks</label>
          <input
            onChange={(e) => this.handleStepsChange(e)}
            value={this.state.steps}
            type="text"
            class="form-control"
            id="steps"
            placeholder="Enter remarks (seperated by , )"
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewHostel;
