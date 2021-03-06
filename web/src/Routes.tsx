import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom' 

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/study" component={TeacherList} />
          <Route path="/give-classes" component={TeacherForm} />
          
          <Route  component={() => (<h1>404 - Not Found</h1>)}  />
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;
