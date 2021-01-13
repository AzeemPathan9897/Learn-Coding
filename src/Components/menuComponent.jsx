import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class menu extends Component {
    menuName = { 
        h:'Home',
        a:'About Us',
        stu:'Student',
        con:'Contact',
        nPage:'Add Record',
        val:0,
     }
     navColor={
            fontSize:25,
            fontWeight:'bold',
            margin:'20px',
     }
     nColor={
        margin:'20px',
        fontSize:30,
        fontFamily:'verdana',
        color:'#ffff',
        backgroundColor:'gray',
        textAlign:'justify',   
        lineHeight:'20px',
     };
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <navbar style={this.navColor} expand="lg">{this.func()}
                       Navbar
                     <ul style={this.nColor} className="Navbar.Collapse">
        <li style={this.h} className="navbar-brand">{this.menuName.h}</li>
        <li className="navbar-brand" >{this.menuName.a}</li>
        <li className="navbar-brand">{this.menuName.stu}</li>
        <li className="navbar-brand">{this.menuName.con}</li>
        <li className="navbar-brand">{this.menuName.nPage}</li>
                     </ul>
                     </navbar>
                     <hr/>
                    </div>
                </div>
            </div>
         );
    }
    func()
    {
        return this.menuName.val ===0 ? ' func ':this.menuName.val;
    }
}

 
export default menu;