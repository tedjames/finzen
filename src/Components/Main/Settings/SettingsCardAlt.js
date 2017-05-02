import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 65,
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: 25,
    borderBottomWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#ddd',
  },
  title: {
    backgroundColor: 'transparent',
    fontFamily: 'Open Sans',
    fontSize: 14,
    letterSpacing: 0.5,
    color: '#252525',
    fontWeight: '400',
  },
  arrowIcon: {
    backgroundColor: 'transparent'
  },
};

export default class SettingsCardAlt extends Component {
  constructor(props) {
    super(props);
    this.renderIcon = this.renderIcon.bind(this);
  }
  renderIcon() {
    switch (this.props.type) {
      case 'account':
        return <Icon style={styles.icon} name={'user'} size={18} />;
      case 'notifications':
        return <Icon style={styles.icon} name={'bell'} size={18} />;
      case 'widgets':
        return <Icon style={styles.icon} name={'cog'} size={18} />;
      case 'security':
        return <Icon style={styles.icon} name={'lock'} size={18} />;
      case 'support':
        return <Icon style={styles.icon} name={'question-circle'} size={18} />;
      case 'feedback':
        return <Icon style={styles.icon} name={'bullhorn'} size={18} />;
      case 'logout':
        return <Icon style={styles.icon} name={'sign-out'} size={18} />;
      default:
        return <Icon style={styles.icon} name={'rocket'} size={18} />;
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.6}
        onPress={this.props.handlePress}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', width: 60, alignItems: 'center' }}>
            {this.renderIcon()}
          </View>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>

        <Icon style={styles.arrowIcon} name={'angle-right'} size={19} color="#8b8b8b" />
      </TouchableOpacity>
    );
  }
}
