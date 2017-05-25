import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Tool extends Component {
  constructor(props) {
    super(props);
    this.renderBadge = this.renderBadge.bind(this);
  }
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
  renderBadge() {
    const styles = {
      badgeCount: {
        fontFamily: 'Open Sans',
        fontSize: 11,
        color: 'white',
        fontWeight: '700',
        backgroundColor: 'transparent',
        bottom: 1
      },
      badge: {
        left: 35,
        bottom: 34,
        borderRadius: 80,
        height: 19,
        width: 19,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -19
      }
    };
    const { badgeCount } = this.props;
    if (badgeCount > 0) {
      return (
        <View style={styles.badge}>
          <Text style={styles.badgeCount}>{badgeCount}</Text>
        </View>
      );
    } return null;
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
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: white ? 0.3 : 0.4,
        shadowRadius: 9,
        marginLeft: 12
      }
    };
    return (
      <TouchableOpacity activeOpacity={white ? 0.4 : 0.7} style={styles.button}>
        <Icon style={styles.icon} name={this.getIconName(name)} size={20} />
        <Text style={styles.text}>{name}</Text>
        {this.renderBadge()}
      </TouchableOpacity>
    );
  }
}
