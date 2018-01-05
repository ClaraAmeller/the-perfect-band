import React from 'react';

class Member extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: this.props.passedMember,
        }
    }

    render() {
        return (
            // Each Member            
            <div className="text-center m-3">
                <span>{this.state.member.name} <strong>on</strong> {this.state.member.role}</span>
            </div>
        );
    }
}

export default Member;