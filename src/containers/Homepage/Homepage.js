import React, { Component } from 'react';
import moment from 'moment';
import bgLogin from '../../images/bg-login.jpg';
import {
  StyleSheet,
  Text,
  TextInput,
  Alert,
  ImageBackground,
  View
} from 'react-native';
import { ListInfomation } from './component/ListInfomation';

type Props = {};
export default class Homepage extends Component<Props> {
  
  constructor(props) {
    super(props);
    this.state = {
      timeCurrent: '',
      infomation: '',
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
  
  saveInfomation = (event) => {
    const infomation = event.nativeEvent.text;
    Alert.alert(`Infomation: ${infomation}`);
  };
  
  render() {
    const { infomation, timeCurrent } = this.state;
    return (
      <ImageBackground style={styles.bgHomepage} source={bgLogin}>
        <View style={styles.container}>
          <Text style={styles.titlePage}>{moment(timeCurrent).format('LTS')}</Text>
          <Text style={styles.titlePage}>Good evening, Remy Nguyễn</Text>
          <View>
            <ListInfomation />
          </View>
          <TextInput
            style={styles.inputInfo}
            returnKeyLabel='Save'
            value={infomation}
            onChangeText={(infomation) => this.setState({ infomation })}
            onSubmitEditing={this.saveInfomation}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bgHomepage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titlePage: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700',
    color: '#E2FFE1',
    marginTop: 10,
    marginBottom: 15,
  },
  inputInfo: {
    paddingLeft: 20,
    paddingRight: 20,
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
  btnSave: {
    padding: 12,
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 4,
  }
});

