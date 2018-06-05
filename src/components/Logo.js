import React, { Component } from 'react';

export class Logo extends Component {
    render() {
        return <img src={this.props.src} width="320" height="80" alt="Logo" />
    }
}
