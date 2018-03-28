import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import AdminForm from '../admin/AdminForm';
import AdminPage from '../admin/AdminPage';
import Layout from './layout/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/admin" component={AdminPage} />
        <Route path="/admin/form/:id" component={AdminForm} />
        <Route path="/admin/form" component={AdminForm} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
