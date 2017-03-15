import React, { Component } from 'react';
import { Text, TouchableOpacity } from ''
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Entypo'

const styles = {
  icon: {
    color: "#333",
    backgroundColor: "transparent",
    opacity: 0.6,
    alignSelf: "center"
  },
  iconContainer: {
    alignSelf: "flex-end",
    marginRight: 0,
    position: "relative",
    bottom: 18,
    height: 30,
    marginBottom: -8,
    width: 60,
  },
  headerText: {
    fontFamily: "Montserrat",
    fontSize: 13,
    fontWeight: "500",
    color: "#333333",
    letterSpacing: 4,
    backgroundColor: "transparent",
    opacity: 0.70,
    alignSelf: "center"
  },
  headerContainer: {
    marginTop: 28
  },
};

export default class Header extends Component {
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: [ "Add Account", "New Transaction", "Cancel" ],
      cancelButtonIndex: 2,
    },
    (buttonIndex) => {
      console.log(buttonIndex);
    });
  }
  render() {
    return (
      <Animatable.View animation="fadeInDown" style={styles.headerContainer}>
        <Text style={styles.headerText}>MINT</Text>
        <TouchableOpacity activeOpacity={0.4} style={styles.iconContainer} onPress={this.showActionSheet}>
          <Icon name="plus" size={20} style={styles.icon} />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}
