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
  rightCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: height / 5.85,
    width: width / 2.25,
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#eeeeee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  leftCard: {
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    height: height / 5.85,
    width: width / 2.25,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#eeeeee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  }
};

export default class SettingsCard extends Component {
  renderIcon() {
    switch (this.props.type) {
      case 'account':
        return <Icon name={'user'} size={20} color="#ccc" />;
      case 'notifications':
        return <Icon name={'bell'} size={20} color="#ccc" />;
      case 'preferences':
        return <Icon name={'cog'} size={20} color="#ccc" />;
      case 'security':
        return <Icon name={'lock'} size={20} color="#ccc" />;
      case 'support':
        return <Icon name={'question-circle'} size={20} color="#ccc" />;
      case 'feedback':
        return <Icon name={'bullhorn'} size={20} color="#ccc" />;
      case 'logout':
        return <Icon name={'sign-out'} size={20} color="#ccc" style={{ marginTop: 0 }} />;
      default:
        return <Icon name={'rocket'} size={20} color="#ccc" />;
    }
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.3} onPress={this.props.handlePress} >
        <View style={this.props.left ? styles.leftCard : styles.rightCard}>
          {this.renderIcon()}
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.subtitle}>{this.props.subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
