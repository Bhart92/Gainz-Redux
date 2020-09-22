import React from 'react';

class SaveButton extends React.Component{
    state = {
        status: 'Add',
        disabled: false
    }
    handleonSave = () => {
        this.setState({
            status: 'Added',
            disabled: true
        })
    };
    render(){
        return (
            <>
                <button className='button__save__individual-workout' onClick={this.handleonSave} disabled={this.state.disabled}>{this.state.status}</button>
            </>
        );
    }
};

export default SaveButton;