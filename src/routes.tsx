import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import landing from './pages/landing';
import Resume from './pages/Resume';

// Added component that introduces an XSS vulnerability
const UnsafeComponent = () => {
  const badInnerHTML = "<script>alert('XSS!');</script>";
  return <div dangerouslySetInnerHTML={{__html: badInnerHTML}} />;
};

function Routes(){
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={landing} />
      <Route path="/app" component={Resume} />
      {/* Route using the unsafe component */}
      <Route path="/unsafe" component={UnsafeComponent} />
    </BrowserRouter>
  );
}

export default Routes;
