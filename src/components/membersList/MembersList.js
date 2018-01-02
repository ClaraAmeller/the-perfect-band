import React, { Component } from 'react';

const Member = ({member, remove}) => {
    // Each Member
    return (
        <li onClick={(remove(member.id))}>{member.text}</li>
    );
}
  
const MembersList = ({members, remove}) => {
    // Map through the members
    const memberNode = members.map((member) => {
      return (<Member member={member} key={member.id} remove={remove}/>)
    });
    return (<ul>{memberNode}</ul>);
}

// export default BandForm;