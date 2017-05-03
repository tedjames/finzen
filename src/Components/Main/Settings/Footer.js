import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const styles = {
  button: {
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    height: 60,
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    letterSpacing: 6,
    backgroundColor: 'transparent',
    color: '#eee',
  },
  icon: {
    top: 0
  }
};

export default class Footer extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={() => Actions.pop()} >
        <Text style={styles.text}>SETTINGS</Text>
        <Icon name="chevron-up" size={21} style={styles.icon} color="#eee" />
      </TouchableOpacity>
    );
  }
}
