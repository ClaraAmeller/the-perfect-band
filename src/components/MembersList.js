import React, { Component } from 'react';
import Member from './Member';

const MembersList = ({members}) => {
    // Map through the members
    console.log('members', members);
    const memberNode = members.map((member) => {
      console.log(member);
      return (<Member member={this.setState.member({member})} />)
    });
    return (<ul>{memberNode}</ul>);
}

export default MembersList;