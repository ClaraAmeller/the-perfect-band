import React from 'react';
import MembersList from './MembersList';

// Member id
window.id = 0;

class MembersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: 'Role',
      members: [],
      empty: false
    };
    this.updateRole = this.updateRole.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.addMember = this.addMember.bind(this);
  }

  // Update role
  updateRole(event) {
    this.setState({role: event.target.value});
  }

  // Check if inputs are empty
  isEmpty(name, role) {
    let empty = (name.value.length === 0 || role.value === 'Role') ? true : false;
    this.setState({
      empty: empty
    });
    return empty;
  }

  // Reset form
  resetForm(name, role) {
    name.value = '';
    role.value = '';
    this.setState({role: 'Role'});
    name.focus();
  }

  // Add member handler
  addMember(name, role) {
    if (!this.isEmpty(name, role)) {
      this.state.members.push({id: window.id, name: name.value, role: role.value});
      this.setState({members: this.state.members});
      this.resetForm(name, role);
      window.id++;
    }
  }

  render() {
    return (
      <form>
        <div className='form-inline' href=''>
          <input className={this.state.empty ? 'is-invalid form-control mr-1' : 'form-control mr-1'}
            placeholder='Name' ref={input => {this.name = input; }}
          />
          <select value={this.state.role}
            className={this.state.empty ? 'is-invalid custom-select form-control mr-1' : 'custom-select form-control mr-1'}
            ref={input => {this.role = input; }} onChange={this.updateRole} >
            <option value='Role'>Role</option>
            <option value='Singer'>Singer</option>
            <option value='Bass'>Bass</option>
            <option value='Drums'>Drums</option>
            <option value='Piano'>Piano</option>
            <option value='Tambourine'>Tambourine</option>
          </select>
          <button type='button' className='btn btn-default' onClick={() => {
            this.addMember(this.name, this.role)
          }}>+</button>
        </div>
        <MembersList passedMembers={this.state.members} />
      </form>
    );
  }
}

export default MembersForm;
