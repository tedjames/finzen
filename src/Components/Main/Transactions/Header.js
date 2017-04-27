import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const styles = {
  icon: {
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  iconContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '400',
    color: '#444',
    letterSpacing: 4,
    backgroundColor: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.025)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  headerContainer: {
    paddingTop: 10,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.125,
    shadowRadius: 8,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#fff'
  },
};

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={this.props.onSearchPress}>
          <Icon name="search" size={15} style={styles.icon} color="#777" />
        </TouchableOpacity>
        <Text style={styles.text}>TRANSACTIONS</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={this.props.onFilterPress}>
          <Icon name="settings" size={17} style={styles.icon} color="#777" />
        </TouchableOpacity>
      </View>
    );
  }
}
