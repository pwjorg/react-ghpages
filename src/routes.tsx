import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import landing from './pages/landing';
import Resume from './pages/Resume';

 function Routes(){
   return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={landing} />
        <Route path="/app" component={Resume} />
      </BrowserRouter>

   );
 } 

 export default Routes;