import React, { Component } from 'react';

/* const Member = ({member, remove}) => {
    // Each Member
    return (
        <li onClick={(removeMember(member.id))}>{member.text}</li>
    );
}
 */

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: this.member
        }
        this.removeMember = this.removeMember.bind(this);
    }

    // Handle remove
    removeMember(memberId) {
        console.log('id ', memberId);
        /* const remainder = this.state.members.filter((member) => {
            // if(member.id !== id) return member;
            console.log(member);
        }); */
        // this.setState({members: remainder});
    }

    render() {
        // Each Member
        return (
            <li onClick={(this.removeMember(this.member.id))}>{this.member.text}</li>
        );
    }
}

export default Member;