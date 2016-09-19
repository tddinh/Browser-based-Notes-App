require( '../styles/notes.scss' );
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure_store';
import Notes from './containers/Notes.js';

const store = configureStore();

render(
  <Provider store={store}>
    <Notes />
  </Provider>,
  document.getElementById('app')
);