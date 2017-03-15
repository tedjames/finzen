import React, { Component } from 'react'
import { StatusBar, ActionSheetIOS, ScrollView, Text, View, Dimensions, TouchableOpacity, TouchableWithoutFeedback as Touchable } from 'react-native'
import { GradientView } from '../../Common'
import LinearGradient from 'react-native-linear-gradient'
import CardCarousel from './CardCarousel'
import Transaction from './Transaction'
import RecentTransactions from './RecentTransactions'
import Planner from './Planner'
import Accounts from './Accounts'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Entypo'

const styles = {
  icon: {
    color: "#333",
    backgroundColor: "transparent",
    opacity: 0.6,
    alignSelf: "center"
  },
  iconContainer: {
    alignSelf: "flex-end",
    marginRight: 0,
    position: "relative",
    bottom: 18,
    height: 30,
    marginBottom: -8,
    width: 60,
  },
  headerText: {
    fontFamily: "Montserrat",
    fontSize: 13,
    fontWeight: "500",
    color: "#333333",
    letterSpacing: 4,
    backgroundColor: "transparent",
    opacity: 0.70,
    alignSelf: "center"
  },
  headerContainer: {
    marginTop: 28
  },
};

export default class Overview extends Component {
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: [ "Add Account", "New Transaction", "Cancel" ],
      cancelButtonIndex: 2,
    },
    (buttonIndex) => {
      console.log(buttonIndex);
    });
  }

  render() {
    return (
      <GradientView>
        <StatusBar
           translucent
           hidden
         />
        <ScrollView>
          <Animatable.View animation="fadeInDown" style={styles.headerContainer}>
            <Text style={styles.headerText}>FINZEN</Text>
            <TouchableOpacity activeOpacity={0.4} style={styles.iconContainer} onPress={this.showActionSheet}>
              <Icon name="plus" size={20} style={styles.icon} />
            </TouchableOpacity>
          </Animatable.View>
          <CardCarousel />

          <Accounts />


          <RecentTransactions />


          <Planner />
        </ScrollView>
      </GradientView>
    );
  }
}








/*
import Accounts from './Accounts'
import Transactions from './Transactions'

export default class Overview extends Component {
  render() {
    return (
      <GradientView>
        <ScrollView>
          <Accounts />
          <Transactions />
        </ScrollView>
      </GradientView>
    );
  }
}
*/
