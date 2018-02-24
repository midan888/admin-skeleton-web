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
        <Route path="/admin/:id" component={AdminForm} />
        <Route path="/admin/create" component={AdminForm} />
        <Route path="/admin" component={AdminPage}/>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
