import React from 'react';
import MembersList from './MembersList';

// Member
window.id = 0;
window.name;
window.role;

class MembersForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      role: 'Role',
      members: []
    };
    this.updateRole = this.updateRole.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.addMember = this.addMember.bind(this);
  }

  // Update role
  updateRole(event) {
    this.setState({role: event.target.value});
  }

  // Reset form
  resetForm(name, role) {
    name.value = '';
    role.value = '';
    this.setState({role: 'Role'});
  }

  // Add member handler
  addMember(name, role) {
    this.state.members.push({id: window.id, name: name.value, role: role.value});
    this.setState({members: this.state.members});
    this.resetForm(name, role);
    window.id++;
  }

  render() {
    let name, role;
    return (
      <div>
        <form className="form-inline">
          <input className="form-control mr-1" placeholder="Name" ref={node => {name = node; }} />
          <select value={this.state.role} className="custom-select form-control mr-1" ref={node => {role = node; }} onChange={this.updateRole} >
            <option value='Role'>Role</option>
            <option value='Singer'>Singer</option>
            <option value='Bass'>Bass</option>
            <option value='Drums'>Drums</option>
            <option value='Piano'>Piano</option>
            <option value='Tambourine'>Tambourine</option>
          </select>
          <a className="btn btn-default" onClick={() => {
            this.addMember(name, role)
          }}>+</a>
        </form>
        <MembersList passedMembers={this.state.members} />
      </div>
    );
  }
}

export default MembersForm;
