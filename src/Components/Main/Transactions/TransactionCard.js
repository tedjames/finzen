import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const styles = {
  container: {
    borderWidth: 0.5,
    borderColor: '#eaeff1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    height: 80,
    borderRadius: 0,
    marginBottom: 1
  },
  transactionCard: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    height: 80,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    borderRadius: 0,
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
    marginBottom: 3
  },
  merchant: {
    fontFamily: 'Open Sans',
    fontSize: 14.5,
    fontWeight: '400',
    letterSpacing: 0.85,
    color: '#252525',
  },
  time: {
    fontFamily: 'Open Sans',
    fontSize: 11,
    fontWeight: '400',
    letterSpacing: 0.75,
    color: '#989898',
  },
  location: {
    fontFamily: 'Open Sans',
    fontSize: 11,
    fontWeight: '400',
    letterSpacing: 0.75,
    color: '#989898',
  },
  amountContainer: {
    flexDirection: 'row'
  },
  amount: {
    fontFamily: 'Open Sans',
    color: '#1ecd8e',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '400'
  },
  dollarIcon: {
    fontFamily: 'Open Sans',
    color: '#1ecd8e',
    fontSize: 12,
    fontWeight: '400',
    alignSelf: 'center',
    opacity: 0.75
  },
  negAmount: {
    fontFamily: 'Open Sans',
    color: '#f95757',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '400'
  },
  negDollarIcon: {
    fontFamily: 'Open Sans',
    color: '#f95757',
    fontSize: 12,
    fontWeight: '400',
    alignSelf: 'center',
    opacity: 0.75
  },
  slash: {
    color: '#989898',
    marginLeft: 3,
    marginRight: 3,
    fontSize: 10,
    marginTop: 1,
    opacity: 0.75
  }
};

export default class extends Component {
  handlePress() {
    // pass in a txid here to grab the transaction from a database
    Actions.tx();
  }

  renderDollarSign(neg) {
    if (neg) {
      return <Text style={styles.negDollarIcon}>- $</Text>;
    } return <Text style={styles.dollarIcon}>$</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.transactionCard}
          activeOpacity={0.4}
          onPress={this.handlePress}
        >
          <View style={styles.iconCard}>
            <Icon name="amazon" size={19} style={styles.icon} />
          </View>
          <View style={styles.transactionData}>
            <View>
              <Text style={styles.merchant}>{this.props.merchant}</Text>
              <View style={{ flexDirection: 'row', marginTop: 1 }}>
                <Text style={styles.location}>{this.props.location}</Text>
                <Text style={styles.slash}>/</Text>
                <Text style={styles.time}>{this.props.time}</Text>
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
      </View>
    );
  }
}
