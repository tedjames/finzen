import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const styles = {
  transactionCard: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    height: 90,
    width: '92%',
    paddingLeft: 20,
    paddingRight: 15,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
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
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#959595',
    alignSelf: 'center'
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
  location: {
    fontFamily: 'Open Sans',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.4,
    color: '#96979c',
  },
  amountContainer: {
    flexDirection: 'row'
  },
  amount: {
    fontFamily: 'Open Sans',
    color: '#0dc381',
    fontSize: 17.5,
    letterSpacing: 0.2,
    alignSelf: 'center',
    fontWeight: '400'
  },
  dollarIcon: {
    fontFamily: 'Open Sans',
    color: '#0dc381',
    fontSize: 14.5,
    fontWeight: '500',
    alignSelf: 'center',
    opacity: 0.75,
    marginRight: 0.5,
    top: 1
  },
  negAmount: {
    fontFamily: 'Open Sans',
    color: '#f95757',
    fontSize: 17.5,
    letterSpacing: 0.2,
    alignSelf: 'center',
    fontWeight: '400'
  },
  negDollarIcon: {
    fontFamily: 'Open Sans',
    color: '#f95757',
    fontSize: 14.5,
    fontWeight: '500',
    alignSelf: 'center',
    opacity: 0.75,
    marginRight: 0.5,
    top: 1
  }
};

export default class extends Component {
  handlePress() {
    // pass in a txid here to grab the transaction from a database
    Actions.tx();
  }

  renderDollarSign(neg) {
    if (neg) {
      return <Text style={styles.negDollarIcon}>$</Text>;
    } return <Text style={styles.dollarIcon}>$</Text>;
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.transactionCard}
        activeOpacity={0.35}
        onPress={this.handlePress}
      >
        <View style={styles.iconCard}>
          <Icon name="amazon" size={19} style={styles.icon} />
        </View>
        <View style={styles.transactionData}>
          <View>
            <Text style={styles.merchant}>{this.props.merchant}</Text>
            <View style={{ flexDirection: 'row', marginTop: 1.5 }}>
              <Text style={styles.location}>{this.props.location}</Text>
            </View>

          </View>
          <View style={styles.amountContainer}>
            {this.renderDollarSign(this.props.neg)}
            <Text style={this.props.neg ? styles.negAmount : styles.amount}>
              {this.props.amount}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
