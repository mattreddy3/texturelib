// basics
import React from 'react';
import { render } from 'react-dom';

// import styles
import './styles/index.css';
import './styles/App.css';
import 'font-awesome/css/font-awesome.css'

// import control base styles
import 'react-select/dist/react-select.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';

// import components
import App from './App';

// import redux deps
import { Provider } from 'react-redux';

// import other
import registerServiceWorker from './registerServiceWorker';
import store, {history}from './configureStore';
import { withRouter } from 'react-router-dom';
import {ConnectedRouter as Router} from 'react-router-redux';

const AppWithRouter = withRouter(App);

// Don't need  history={history}
const router = (
      <Provider store={store}>
        <Router history={history}>
          <AppWithRouter />
        </Router>
      </Provider>
)

render(router, document.getElementById('root'));

registerServiceWorker()
