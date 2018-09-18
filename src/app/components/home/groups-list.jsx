import React, { Component } from "react";

const GroupList = ({ groups }) => {
  return (
    <table className="table mx-auto table-striped">
      <tbody>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="cold">Description</th>
        </tr>
        {groups.map(group => (
          <GroupTableRows key={group.id} group={group} />
        ))}
      </tbody>
    </table>
  );
};
export default GroupList;

const GroupTableRows = ({ group }) => {
  return (
    <tr>
      <td key={group.id}>{group.id}</td>
      <td>{group.title}</td>
      <td>{group.desc}</td>
    </tr>
  );
};