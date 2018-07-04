import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

type Props = {};
export default class Login extends Component<Props> {
  static navigationOptions = {
    title: 'Login Screen',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Login Page</Text>
        <Button
          title="Go to Homepage"
          color="#FF8F29"
          onPress={() => this.props.navigation.push('Homepage')}
        />
        <Button
          title="Go back"
          color="#B2D9FF"
          onPress={() => this.props.navigation.goBack()}
        />
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

