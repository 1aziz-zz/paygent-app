import React, { Component } from "react";
import data from "./data.json";
import Test from "../test/test";
import GroupList from "./groups-list";
import AddGroup from "./add-group";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      groups: data
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h3>Groups</h3>
          <GroupList groups={this.state.groups} />
          <AddGroup onAdd={this.addGroupHandler} />
        </div>
      </div>
    );
  }

  addGroupHandler = group => {
    var newListOfGroups = this.state.groups.slice();
    newListOfGroups.push(group);
    this.setState({ groups: newListOfGroups });
  };
}

export default Home;
