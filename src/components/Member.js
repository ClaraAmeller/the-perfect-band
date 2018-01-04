import React, { Component } from 'react';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: this.props.passedMember,
            members: this.props.allMembers
        }
        this.removeMember = this.removeMember.bind(this);
    }

    // Handle remove
    removeMember(memberId) {
        console.log('id ', memberId);
  /*       const remainder = this.state.members.filter((member) => {
            if (member.id !== memberId) return member;
            console.log(member);
        });
        this.setState({members: remainder});
        return false; */
        // console.log('Member', this.state.member);
    }

    render() {
        // Each Member
        return (
            <div className="text-center m-3">
                <span>{this.state.member.name} on {this.state.member.role}</span>
                {/* <button className="btn btn-danger" onClick={(this.removeMember(this.state.member.id))}>x</button> */}
            </div>
        );
    }
}

export default Member;