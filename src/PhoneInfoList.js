import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps ={
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined'),
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.data !== nextProps.data;
    }

    render() {
        console.log('render PhoneInfo ' + this.props.data.id);
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (
            <PhoneInfo 
            key={info.id} 
            info={info}
            onRemove={onRemove}
            onUpdate={onUpdate}
            />
            )
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;