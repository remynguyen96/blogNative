import React, { Component } from 'react';
import moment from 'moment';
import bgLogin from '../../images/bg-login.jpg';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  View
} from 'react-native';

type Props = {};
export default class Login extends Component<Props> {
  
  constructor(props) {
    super(props);
    this.state = {
      timeCurrent: '',
      email: '',
      password: '',
    }
  }
  
  componentDidMount() {
    this.intervalTime = setInterval(() => {
      this.setState({
        timeCurrent: Date.now(),
      });
    }, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalTime);
  }
  
  btnSubmit = () => {
    const { email, password } = this.state;
    Alert.alert(`Email: ${email} --- Password: ${password}`);
  };
  
  render() {
    const { email, password, timeCurrent } = this.state;
    return (
      <ImageBackground style={styles.bgLogin} source={bgLogin}>
        <View style={styles.container}>
          <Text style={styles.titleLogin}>{moment(timeCurrent).format('LTS')}</Text>
          <Text style={styles.titleLogin}>Good evening, Remy Nguyễn</Text>
          <TextInput
            style={styles.inputLogin}
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            style={styles.inputLogin}
            textContentType="password"
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
          <View style={styles.btnContainer}>
            <Button
              title="Login"
              color="#A3FFB5"
              style={styles.btnLogin}
              onPress={this.btnSubmit}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bgLogin: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titleLogin: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700',
    color: '#E2FFE1',
    marginTop: 10,
    marginBottom: 15,
  },
  inputLogin: {
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    fontWeight: '500',
    fontSize: 18,
    color: '#E8FFF6',
  },
  btnContainer: {
    width: '35%',
    margin: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnLogin: {
    padding: 12,
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 4,
  }
});

