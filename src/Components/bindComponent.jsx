import React, { Component } from 'react';
class bind extends Component {
    clsname = "nav navbar-nav bg-info";
    state = { 
        fruits:["Banana","Grapes","Mango","Apple","pineapple"]
     };
    render() { 
    return ( <div>
        
        <ul className={this.clsname} >
            {
                this.state.fruits.map( (fruit) => <li key={fruit}>{fruit}</li> ) 
            }
        </ul>
    </div> );
    }
}
 
export default bind;