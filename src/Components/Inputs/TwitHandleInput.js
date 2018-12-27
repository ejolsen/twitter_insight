import React, { Component } from 'react';

class InputMain extends Component {
    constructor() {
        super();
        this.handleLocalInputChange = this.handleLocalInputChange.bind(this);
    };

    handleLocalInputChange(e) {
        this.props.handleInput(e.target.value)
    };

    render() {
        return (
            <div>
                <span className='input-at'>@</span>
                <input 
                    type='text' 
                    className='TwitInput-main' 
                    placeholder='Enter Twitter Handle' 
                    value={this.props.inputValue} 
                    onChange={this.handleLocalInputChange}
                />
            </div>
        );
    };
};

export default InputMain 