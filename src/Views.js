import React from "react";
import Dashboard from "./Dashboard";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Page9 from "./Page9";
import PageReRating from "./PageReRating";


import PageRating from "./PageRating"
export class View extends React.Component{

    
    render() {
      return (
        <div>
          {this.props.page === 'dashboard' ? <Dashboard/> : null}
          {this.props.page === 'page1' ? <Page1 /> : null}
          {this.props.page === 'page2' ? <Page2 /> : null}
          {this.props.page === 'page3' ? <Page3 /> : null}
          {this.props.page === 'page4' ? <Page4 /> : null}
          {this.props.page === 'page5' ? <Page5 /> : null}
          {this.props.page === 'page6' ? <Page6 /> : null}
          {this.props.page === 'page7' ? <Page7 /> : null}
          {this.props.page === 'page8' ? <Page8 /> : null}
          {this.props.page === 'page9' ? <Page9 /> : null}

          {this.props.page === 'pagerating' ? <PageRating /> : null}
          {this.props.page === 'pagererating' ? <PageReRating /> : null}

        </div>
      )
    }
  
   
  
  }

