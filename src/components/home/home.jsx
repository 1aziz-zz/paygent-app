import React, { Component } from "react";
import data from "./data.json";

class Home extends Component {
  render() {
    return (
      <div>
        <div class="col-lg-8 mx-auto">
          <h2>Groups</h2>
          <br />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {data.map(function(group) {
                return (
                  <tr>
                    <th scope="row">
                      <a href="#">{group.title}</a>
                    </th>
                    <td>{group.desc}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
