import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Get device dimensions for responsive components
const { height, width } = Dimensions.get('window');

const styles = {
  title: {
    fontFamily: 'Open Sans',
    fontWeight: '500',
    fontSize: 14,
    letterSpacing: 0.3,
    backgroundColor: 'transparent',
    marginTop: 15
  },
  subtitle: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 13,
    letterSpacing: 0.65,
    marginTop: 2,
    backgroundColor: 'transparent',
    opacity: 0.75
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 80,
    width: '80%',
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#eeeeee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  icon: {
    alignSelf: 'center',
    top: 6
  }
};

export default class SettingsCard extends Component {
  renderIcon() {
    switch (this.props.type) {
      case 'account':
        return <Icon style={styles.icon} name={'user'} size={20} color="#252525" />;
      case 'notifications':
        return <Icon style={styles.icon} name={'bell'} size={20} color="#252525" />;
      case 'preferences':
        return <Icon style={styles.icon} name={'cog'} size={20} color="#252525" />;
      case 'security':
        return <Icon style={styles.icon} name={'lock'} size={20} color="#252525" />;
      case 'support':
        return <Icon style={styles.icon} name={'question-circle'} size={20} color="#252525" />;
      case 'feedback':
        return <Icon style={styles.icon} name={'bullhorn'} size={20} color="#252525" />;
      case 'logout':
        return <Icon style={styles.icon} name={'sign-out'} size={20} color="#252525" />;
      default:
        return <Icon style={styles.icon} name={'rocket'} size={20} color="#252525" />;
    }
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.3} onPress={this.props.handlePress} >
        <View style={styles.card}>
          {this.renderIcon()}
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
