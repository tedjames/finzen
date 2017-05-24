import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Tool extends Component {
  getIconName(name) {
    switch (name) {
      case 'Bills':
        return 'check-square-o';
      case 'Income':
        return 'briefcase';
      case 'Budgets':
        return 'clipboard';
      case 'Net Worth':
        return 'line-chart';
      case 'Savings':
        return 'money';
      default:
        return 'rocket';
    }
  }
  render() {
    const { name, white } = this.props;
    const styles = {
      icon: {
        color: white ? '#c8cdd6' : 'white'
      },
      text: {
        fontFamily: 'Open Sans',
        fontSize: 11,
        fontWeight: '500',
        letterSpacing: 0.1,
        color: white ? '#777783' : '#f5f5f5',
        marginTop: 7
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white ? 'white' : '#3D3BEE',
        height: 74,
        width: 100,
        borderRadius: 5,
        shadowColor: white ? '#777783' : '#4b37f2',
        shadowOffset: { width: 2, height: 8 },
        shadowOpacity: white ? 0.3 : 0.4,
        shadowRadius: 8,
        marginLeft: 12
      }
    };
    return (
      <TouchableOpacity activeOpacity={white ? 0.6 : 0.8} style={styles.button}>
        <Icon style={styles.icon} name={this.getIconName(name)} size={20} />
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    );
  }
}
