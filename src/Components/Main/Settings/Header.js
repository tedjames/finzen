import React, { Component } from 'react';
import { Text } from 'react-native'
import * as Animatable from 'react-native-animatable'

const styles = {
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
    marginTop: 35,
    marginBottom: 30,
    marginRight: 50,
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end"
  },
  headerText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    color: "#353e47",
    fontSize: 13,
    letterSpacing: 3.85,
    opacity: 0.8,
    backgroundColor: "transparent",
  },
  headerSymbol: {
    fontSize: 11.5,
    color: "#333333",
    letterSpacing: 0.2,
    fontWeight: "600",
    backgroundColor: "transparent",
    marginRight: 15,
    marginTop: 0.5,
    opacity: 0.6
  }
};

export default class Header extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loading) {
      this.refs.header.transitionTo({ opacity: 0, marginRight: 0 }, 700)
    }
  }
  render() {
    return (
      <Animatable.View ref="header" animation="fadeInLeft" duration={1025} style={styles.headerContainer}>
        <Text style={styles.headerSymbol}>//</Text>
        <Text style={styles.headerText}>{this.props.text}</Text>
      </Animatable.View>
    );
  }
}
