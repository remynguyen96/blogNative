import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View, Button } from 'react-native';
import { RootRouter } from './Router';
import { configureStore } from '../../store';

const store = configureStore();
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Button color="#8DFF9F" title="Go to Login" onPress={() => {
            console.log(this.props);
          }} />
          <RootRouter />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
