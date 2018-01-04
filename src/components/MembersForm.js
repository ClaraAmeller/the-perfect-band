import React, { Component } from 'react';
import MembersList from './MembersList';

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
  }

  render() {
    let name, role;
    return (
      <div>
        <form className="form-inline">
          <input className="form-control mr-1" placeholder="Name" ref={node => {name = node; }} />
          <input className="form-control mr-1" placeholder="Role" ref={node => {role = node; }} />
          <a className="btn btn-default" onClick={() => {
            this.addMember([name.value, role.value]);
            name.value = '';
            role.value = '';
            return false;
          }}>
            +
          </a>
        </form>
        <MembersList passedMembers={this.state.members}/>
      </div>
    );
  }
}

export default MembersForm;
