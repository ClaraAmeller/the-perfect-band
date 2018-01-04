import React, { Component } from 'react';
import Member from './Member';

class MembersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: this.props.passedMembers,
    };
  }

  render() {
    // Map through the members
    const memberNode = this.state.members.map((member) => {
      /* Note: Improve */
      return (<Member passedMember={member} allMembers={this.state.members} key={member.id} />)
    });
    return (
      <div className="">
        {memberNode}
      </div>
    );
  }
}

export default MembersList;