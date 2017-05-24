import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Foundation';
import { Actions } from 'react-native-router-flux';

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = {
  transactionCard: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    height: 90,
    width: DEVICE_WIDTH / 1.1,
    paddingLeft: 20,
    paddingRight: 15,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.075,
    shadowRadius: 5,
    borderRadius: 12,
    marginBottom: 10,
  },
  iconCard: {
    height: 42.5,
    width: 42.5,
    marginRight: 15,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: '#ddd',
  },
  icon: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  transactionData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2
  },
  merchant: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: '#000',
  },
  subtitle: {
    fontFamily: 'Open Sans',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.4,
    color: '#96979c',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  amount: {
    fontFamily: 'Open Sans',
    color: '#0dc381',
    fontSize: 17.5,
    letterSpacing: 0.2,
    alignSelf: 'center',
    fontWeight: '400'
  },
  negAmount: {
    fontFamily: 'Open Sans',
    color: '#f95757',
    fontSize: 17.5,
    letterSpacing: 0.2,
    alignSelf: 'center',
    fontWeight: '400'
  },
};

export default class NewAccountCard extends Component {
  handlePress() {
    // pass in a txid here to grab the transaction from a database
    Actions.tx();
  }

  renderCircleIcon(type) {
    switch (type) {
      case 'checking':
        return <Icon name={'credit-card'} size={16} style={[styles.icon]} />;
      case 'savings':
        return <Icon name={'bank'} size={16} style={[styles.icon, { left: 1 }]} />;
      case 'cash':
        return <Icon name={'money'} size={16} style={styles.icon} />;
      case 'bitcoin':
        return <Icon name={'bitcoin'} size={18} style={styles.icon} />;
      case 'paypal':
        return <Icon name={'bank'} size={20} style={styles.icon} />;
      default:
        return <Icon name={'bank'} size={18} style={styles.icon} />;
    }
  }

  renderIcon(type) {
    switch (type) {
      case 'checking':
        return <Icon name={'credit-card'} size={21} style={[styles.icon]} color="#CECFF8" />;
      case 'savings':
        return <Icon name={'bank'} size={21} color="#a2ceed" style={[styles.icon, { left: 1 }]} />;
      case 'cash':
        return <Icon name={'money'} size={21} color="#77ddbb" style={styles.icon} />;
      case 'bitcoin':
        return <Icon name={'bitcoin'} size={23} color="#fcc97d" style={styles.icon} />;
      case 'paypal':
        return <Icon2 name={'paypal'} size={31} color="#a2ceed" style={styles.icon} />;
      default:
        return <Icon name={'bank'} size={23} style={styles.icon} />;
    }
  }

  renderAmount(type, amount) {
    const newAmount = amount.toString().replace('-', '');
    const negAmount = `-$${newAmount}`;
    const posAmount = `$${newAmount}`;
    if (type === 'bitcoin') {
      return <Text style={styles.subtitle}>{amount} BTC</Text>;
    } return <Text style={styles.subtitle}>{amount < 0 ? negAmount : posAmount }</Text>;
  }

  render() {
    const { type, amount, name } = this.props;
    return (
      <TouchableOpacity
        style={styles.transactionCard}
        activeOpacity={0.45}
        onPress={this.handlePress}
      >
        <View style={styles.iconCard}>{this.renderIcon(type)}</View>

        <View style={styles.transactionData}>
          <View>
            <Text style={styles.merchant}>{name}</Text>
            <View style={{ flexDirection: 'row', marginTop: 1.5 }}>
              {this.renderAmount(type, amount)}
            </View>
          </View>

          <View style={styles.iconContainer}>
            <Icon name="angle-right" color="#A5ABAF" size={20} style={styles.arrowIcon} />
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}
