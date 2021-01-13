import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
class table extends Component {
    tc = "table";
    tableName={
        sn:'s.no',
        fn:'first name',
        ln:'last name',
        cr:'cource',

    }
    state = {  
        d1:['1','Azeem','Pathan','MeanStack'],
        d2:['2','Vineet','Gautam','Web Development'],
        d3:['3','Rakesh','Gujjar','Angular'],
        d4:['4','Faisal','Khan','Mca'],
        d5:['5','Neha','Mirza','Mba'],
        d6:['6','Harsa','Saif','Mba'],
        d7:['7','Alsa','Khan','bba']
    };  
    render() { 
        return (
            
            
        <div className="container">    
           <div className="row">
             <div className="col-md-8">
          <table className={this.tc}>
      <thead>
   <tr>
        <th scope="col">{this.tableName.sn}</th>
        <th scope="col">{this.tableName.fn}</th>
        <th scope="col">{this.tableName.ln}</th>
        <th scope="col">{this.tableName.cr}</th>
   </tr>
  </thead>
                            {/* body */}
  <tbody>
    <tr>
        {
            this.state.d1.map( (data) => <th key={data}>{data}</th>)
        }
    </tr>
    <tr>
        {
            this.state.d2.map( (data) => <th key={data}>{data}</th>)
        }
    </tr>
    <tr>
        {
            this.state.d3.map( (data) => <th key={data}>{data}</th>)
        }
    </tr>
    <tr>
        {
    this.state.d4.map( (data) => <th key={data}>{data}</th>)
        }
    </tr>
    <tr>
        {
        this.state.d5.map ( ( data) => <th key={data}>{data}</th>)
        }
        </tr>
    <tr>
        {
            this.state.d6.map ((data) => <th key={data}>{data}</th>)
        }
    </tr>
    <tr>
        {
            this.state.d7.map((data) => <th key={data}>{data}</th>)
        }
    </tr>
      </tbody>
 </table>
      </div>
           </div>
               </div>  
        );
    }
}
export default table;