import React, { Component } from 'react';
import { Animated, TouchableOpacity, ActionSheetIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: -10,
    marginTop: 6
  },
  icon: {
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  iconContainer: {
    padding: 20,
    backgroundColor: 'transparent'
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

  handleSettings() {
    Actions.settings();
  }

  render() {
    const headerOpacity = this.props.scrollY.interpolate({
      inputRange: [-75, 0, 75],
      outputRange: [0.6, 1, 0],
      extrapolate: 'clamp'
    });
    const headerScale = this.props.scrollY.interpolate({
      inputRange: [-50, 0],
      outputRange: [0.99, 1],
      extrapolate: 'clamp'
    });
    return (
      <Animated.View style={[styles.header, { opacity: headerOpacity, transform: [{ scale: headerScale }] }]}>
        <TouchableOpacity onPress={this.handleAdd} style={styles.iconContainer}>
          <Icon name="plus" size={16} style={styles.icon} color="#a0a6ad" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Actions.settings()} style={styles.iconContainer}>
          <Icon2 name="cogs" size={16} style={styles.icon} color="#a0a6ad" />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
