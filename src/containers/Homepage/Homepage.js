import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

type Props = {};
export default class Homepage extends Component<Props> {
  static navigationOptions = {
    title: 'Homepage Screen',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Homepage</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, consequuntur, dolor dolorem, doloribus dolorum ea eaque enim iste magnam perspiciatis quod voluptates voluptatibus. Dicta expedita ipsum officiis placeat, quasi repellat?</Text>
        <Button
          title="Go to Login Page"
          color="#80FFB2"
          onPress={() => this.props.navigation.navigate('Login')}
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
