import React, { Component } from 'react';
import { render } from 'react-dom';

import Title from './components/Title';
import MembersForm from './components/MembersForm';
import MembersList from './components/MembersList';

// Member id
window.id = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      band: '',
      members: []
    }
    this.apiUrl = 'http://localhost:3000'
  }

  componentDidMount() {
    /* axios.get(this.apiUrl)
      .then((res) => {
        this.setState({members:res.members});
      });
      console.log(this.state.members); */
  }

  // Name band handler
/*   renameBand(val) {
    console.log(val);
    const band = {text: val};
    axios.post(this.apiUrl, band)
      .then((res) => {
        this.setState({band: band});
      });
  } */

  // Add todo handler
/*   addMember(val) {
    const member = {text: val}
      this.state.members.push(member);
      this.setState({members: this.state.members});
  } */

  // Handle remove
/*   removeMember(id) {
    const remainder = this.state.members.filter((member) => {
      if(member.id !== id) return member;
    });
    this.setState({members: remainder});
  } */

  render() {
    return (
      <div>
        <Title />
        <MembersForm />
      </div>
    );
  }
}

export default App;