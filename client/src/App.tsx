import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Layout } from '@/components/shared';
import { HomePage, TablePage } from '@/pages';

import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<HomePage />} index />
            <Route element={<TablePage />} path="table/:tableName" />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
