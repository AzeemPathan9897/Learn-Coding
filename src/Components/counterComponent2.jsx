import React, { Component } from 'react';

class counter extends Component {
    state={
        count:0
    }
    der={
        fontSize:'40px',
        fontFamily:'verdana',
        color:'red',

    };
    render() { 
        return ( 
            <div>
                <span style={this.der} className="badge badge-primary m-2 p-2">{this.fun()}</span>
                <button className="btn btn-secondary btn-lg">Click</button>
            </div>
         );
    }
    fun()
    {
        return this.state.count===0 ? 'Zero':this.state.count;
    }
}
 
export default counter;