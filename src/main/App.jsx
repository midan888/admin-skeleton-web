import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { Search, Form } from 'admin/index';
import Layout from './Layout/Layout';


const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/admin/:id" component={Form} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
