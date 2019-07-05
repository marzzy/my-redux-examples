import { createStore } from 'redux';
import rootReducers from './reducers';

// the secound parameters for createStore place here for
// showing the details of changes on mozila redux tab
export default createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
