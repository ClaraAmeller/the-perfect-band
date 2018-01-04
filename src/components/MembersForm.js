import React, { Component } from 'react';

window.id = 0;

class MembersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
    this.addMember = this.addMember.bind(this);
  }

  // Add member handler
  addMember(member) {
    this.state.members.push({id: window.id, name: member[0], role: member[1]});
    this.setState({members: this.state.members}); 
    window.id++;
    console.log(this.state.members);
  }

  render() {
    let name, role;
    return (
      <div>
        <input placeholder="Name" ref={node => {name = node; }} />
        <input placeholder="Role" ref={node => {role = node; }} />
        <button onClick={() => {
          this.addMember([name.value, role.value]);
          name.value = '';
          role.value = '';
        }}>
          +
        </button>
      </div>
    );
  }
}

export default MembersForm;
