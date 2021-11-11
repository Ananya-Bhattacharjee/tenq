import React from "react";
import Dashboard from "./Dashboard";
import Page1 from "./Page1";
import Page2 from "./Page2";
import PageRating from "./PageRating"
export class View extends React.Component{

    
    render() {
      return (
        <div>
          {this.props.page === 'dashboard' ? <Dashboard/> : null}
          {this.props.page === 'page1' ? <Page1 /> : null}
          {this.props.page === 'page2' ? <Page2 /> : null}
          {this.props.page === 'page_rating' ? <PageRating /> : null}

        </div>
      )
    }
  
   
  
  }

