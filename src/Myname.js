import React, { Component } from 'react';

class Myname extends Component {
    render() {
        const {name} = this.props;
        return (
            <div>
                하이 {name}
            </div>
        );
    }
}

export default Myname;