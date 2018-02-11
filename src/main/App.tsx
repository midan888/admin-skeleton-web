import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import AdminForm from '../admin/AdminForm/AdminForm';
import Layout from './Layout/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/admin/create" component={AdminForm} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
