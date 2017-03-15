import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { Text, View, TouchableOpacity, ActionSheetIOS, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable'

const styles = {
  titleCard: {
    paddingTop: 12,
    paddingBottom: 5,
    backgroundColor: "#eee",
    height: 130,
    borderRadius: 11,
    position: "relative",
    bottom: 39,
    marginLeft: 30,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.275,
    shadowRadius: 9,
    elevation: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5
  },
  title: {
    fontFamily: "Open Sans",
    fontSize: 24,
    fontWeight: "300",
    marginLeft: 25,
    flex: 1,
    marginTop: -5,
  },
  row2: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 25,
    justifyContent: "space-between",
    alignItems: "center"
  },
  settingsIcon: {
    color: "#333",
    backgroundColor: "transparent",
    opacity: 0.6,
    alignSelf: "center",
    marginRight: 15,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5
  },
  clockIcon: {
    color: "#3d3d3d",
    backgroundColor: "transparent",
    marginRight: 6,
    marginTop: 3
  },
  date: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "300",
    marginRight: 1,
  },
  slash: {
    color: "#989898",
    marginLeft: 4,
    marginRight: 4,
    fontSize: 10,
    marginTop: 2,
    opacity: 0.75,
  },
  time: {
    fontFamily: "Open Sans",
    fontSize: 12,
    fontWeight: "300",
    marginLeft: 1
  },
  amount: {
    alignSelf: "flex-end",
    backgroundColor: 'transparent',
    color: '#f95757',
    fontSize: 22,
    fontWeight: "300",
    marginRight: 25,
    marginBottom: 5
  },
  dollarSign: {
    backgroundColor: 'transparent',
    color: '#f95757',
    fontSize: 14,
    fontWeight: "300",
    marginTop: 3
  },
}

export default class titleCard extends Component {
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: [ "Edit Details", "Mark as Recurring", "Cancel" ],
      cancelButtonIndex: 2,
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          // TODO: Create an edit details page
          // TODO: Insert router push to edit details page here and pass in a txid
          break;
        case 1:
          // TODO: Create a mark as recurring set of pages
          // TODO: Insert router push to "mark as recurring" scene bucket and pass in a txid
          break;
        case 2:
          break;
        default:
          break
      }
    });
  }
  render() {
    // BUG: https://github.com/tedjames/finzen/issues/4 - Text scaling issue
    return (
      <Animatable.View animation="slideInRight" duration={800} style={styles.titleCard}>
        <View style={styles.row}>
          <Text style={styles.title}>Antonio's Brick Oven Pizza</Text>
          <TouchableOpacity activeOpacity={0.4} onPress={this.showActionSheet}>
            <Icon name="options-vertical" size={16} style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Icon name="clock" size={10} style={styles.clockIcon} />
            <Text style={styles.date}>Aug 2, 2017</Text>
            <Text style={styles.slash}>//</Text>
            <Text style={styles.time}>9:34pm</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dollarSign}>$</Text>
            <Text style={styles.amount}>12.95</Text>
          </View>
        </View>
      </Animatable.View>
    );
  }
}
