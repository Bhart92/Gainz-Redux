import React from 'react';


class SaveButton extends React.Component{
    state = {
        status: 'Save',
        disabled: false
    }
    handleonSave = () => {
        this.setState({
            status: 'Saved',
            disabled: true
        })
    }
    render(){
        return (
            <>
            <button className='button__save__individual-workout' onClick={this.handleonSave} disabled={this.state.disabled}>{this.state.status}</button>
            </>
        )
    }
}



export default SaveButton;