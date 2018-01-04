import React, { Component } from 'react';
import Member from './Member';

class MembersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: this.props.passedMembers
    };
  }

  render() {
    // Map through the members
    const memberNode = this.state.members.map((member) => {
      return (<Member passedMember={member} key={member.id} />)
    });
    return (
      <div>
        {memberNode}
      </div>
    );
  }
}

export default MembersList;