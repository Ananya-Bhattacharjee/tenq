import React from "react";
import Dashboard from "./Dashboard";
import Page1 from "./Page1";
export class View extends React.Component{

    
    render() {
      return (
        <div>
          {this.props.page === 'dashboard' ? <Dashboard/> : null}
          {this.props.page === 'page1' ? <Page1 /> : null}
        </div>
      )
    }
  
   
  
  }

