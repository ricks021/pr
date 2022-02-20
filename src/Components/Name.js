import React from 'react'

class Name extends React.Component{

    state = {
        FirstName: '',
        LastName:''
    };

    render(){
        return(

            <form>
                <input placeholder='First name' value={this.state.FirstName} onChange={e => e.target.value}/>
            </form>
        );
    }
}