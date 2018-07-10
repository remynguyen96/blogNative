import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { RootRouter } from './Router';
import { configureStore } from '../../store';

const store = configureStore();
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }
}
