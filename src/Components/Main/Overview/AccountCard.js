import React, { Component } from 'react';
import { ScrollView, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux';

const styles = {
  accountsContainer: {
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  accountsCard: {
    backgroundColor: "transparent",
    alignSelf: "center",
    alignItems: "center",
    height: 65,
    paddingLeft: 16,
    paddingRight: 10,
    marginBottom: 0,
    flexDirection: "row",
  },
  iconCard: {
    height: 35,
    width: 35,
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  accountIcon: {
    backgroundColor: "transparent",
    color: "#ccc",
    alignSelf: "center",
    marginRight: 15,
  },
  transactionData: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3
  },
  accountName: {
    fontFamily: "Open Sans",
    fontSize: 14.5,
    fontWeight: "400",
    letterSpacing: 0.85,
    color: "#252525",
  },
  date: {
    fontFamily: "Open Sans",
    fontSize: 11,
    fontWeight: "300",
    letterSpacing: 0.75,
    color: "#111",
    opacity: 0.8
  },
  amountContainer: {
    flexDirection: "row"
  },
  arrowIcon: {
    color: "#ddd",
    alignSelf: "center"
  },
  slash: {
    color: "#989898",
    marginLeft: 3,
    marginRight: 3,
    fontSize: 10,
    marginTop: 1,
    opacity: 0.75
  },
  amount: {
    fontFamily: "Open Sans",
    fontSize: 11,
    fontWeight: "400",
    letterSpacing: 0.75,
    color: "#989898",
  },
};

export default class AccountCard extends Component {
  renderAmount(type, amount) {
    if(type === "bitcoin") {
      return <Text style={styles.amount}>{amount} BTC</Text>;
    } else {
      return <Text style={styles.amount}>${amount} Available</Text>;
    }
  }
  renderIcon(type) {
    switch (type) {
      case "checking":
        return <Icon name={"credit-card"} size={19} style={[styles.accountIcon, { position: "relative", left: 1, marginRight: 15 }]}/>;
      case "savings":
        return <Icon name={"bank"} size={18} style={[styles.accountIcon, { position: "relative", left: 1, marginRight: 14 }]}/>;
      case "cash":
        return <Icon name={"money"} size={19} style={styles.accountIcon}/>;
      case "bitcoin":
        return <Icon name={"bitcoin"} size={20} style={[styles.accountIcon, { marginLeft: 3, marginRight: 18 }]}/>;
      case "paypal":
        return <Icon name={"bank"} size={20} style={styles.accountIcon}/>;
      default:
        return <Icon name={"bank"} size={18} style={styles.accountIcon}/>;
    }
  }
  handlePress() {
    Actions.act()
  }
  render() {
    return (
      <View style={styles.accountsContainer}>
        <TouchableOpacity style={styles.accountsCard} activeOpacity={0.4} onPress={this.handlePress}>
          {this.renderIcon(this.props.type)}
          <View style={styles.transactionData}>
            <View>
              <Text style={styles.accountName}>{this.props.name}</Text>
              {this.renderAmount(this.props.type, this.props.amount)}
            </View>
            <Icon name={"angle-right"} size={20} style={styles.arrowIcon}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
