import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { Logo } from '../../Common';


const styles = {
  headerContainer: {
    backgroundColor: 'transparent'
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    top: 35
  }
};

export default class MainHeader extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Logo />
        <TouchableOpacity style={styles.iconContainer} onPress={() => Actions.pop()}>
          <Icon name="plus" size={17} style={styles.icon} color="#777" />
        </TouchableOpacity>
      </View>
    );
  }
}
