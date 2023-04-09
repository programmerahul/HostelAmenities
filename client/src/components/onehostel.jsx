import React, { Component } from "react";
import { getHostel } from "../services/hostelService";
class OneHostel extends Component {
  state = {
    hostel: {},
  };
  async componentDidMount() {
    const hostel = await getHostel(this.props.match.params.id);
    this.setState({ hostel });
  }
  render() {
    console.log(this.props.user);
    console.log(this.state.hostel);
    const { hostel } = this.state;
    return (
      <React.Fragment>
        <div>
          <div>
            <h1>{hostel.name}</h1>
            <p>{hostel.description}</p>
            <p className="mt-5">Amenities provided by Hostel:</p>
            <ol>
              {hostel.amenities &&
                hostel.amenities.map((amenity) => {
                  return <li>{amenity}</li>;
                })}
            </ol>
            <p className="mt-5">Remarks:</p>
            <ul>
              {hostel.steps &&
                hostel.steps.map((step) => {
                  return <li>{step}</li>;
                })}
            </ul>

            <p className="badge p-2 badge-info mt-3">
              Created by {hostel.author && hostel.author.name}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OneHostel;
