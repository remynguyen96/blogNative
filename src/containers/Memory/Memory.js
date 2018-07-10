import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class Memory extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Memory Page</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur debitis, deserunt expedita illum impedit quibusdam recusandae tempore! Architecto cum, deserunt dolor dolorem minima quae quasi repudiandae saepe sint sit.</Text>
      </View>
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

