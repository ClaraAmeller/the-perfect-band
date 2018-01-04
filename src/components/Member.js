import React, { Component } from 'react';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: this.props.passedMember
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
            <div>
                <span>{this.state.member.name} on {this.state.member.role}</span>
                <button onClick={(this.removeMember(this.state.member.id))}>x</button>
            </div>
        );
    }
}

export default Member;