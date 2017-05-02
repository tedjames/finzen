import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ActionSheetIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

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
  handleAdd() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Add Account', 'New Transaction', 'Cancel'],
      cancelButtonIndex: 2,
    },
    (buttonIndex) => {
      console.log(buttonIndex);
    });
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={this.handleAdd}>
          <Icon name="plus" size={14} style={styles.icon} color="#777" />
        </TouchableOpacity>
        <Text style={styles.text}>FINZEN</Text>
        <TouchableOpacity style={styles.iconContainer} onPress={this.handleSettings}>
          <Icon2 name="cogs" size={14} style={styles.icon} color="#777" />
        </TouchableOpacity>
      </View>
    );
  }
}
