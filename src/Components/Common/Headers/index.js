import React from 'react'
import { View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'

const styles = {
  headerText: {
    fontFamily: "Montserrat",
    fontSize: 13,
    fontWeight: "500",
    color: "#333333",
    letterSpacing: 4,
    backgroundColor: "transparent",
    opacity: 0.70
  },
  leftHeaderSymbol: {
    fontSize: 11.5,
    color: "#333333",
    letterSpacing: 0.2,
    fontWeight: "600",
    backgroundColor: "transparent",
    marginRight: 15,
    marginTop: 0.5,
    opacity: 0.6
  },
  leftHeaderText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    color: "#333333",
    fontSize: 12,
    letterSpacing: 4,
    opacity: 0.8,
    backgroundColor: "transparent",
  },
  leftHeaderContainer: {
    marginTop: 25,
    marginLeft: 55,
    marginBottom: 30,
    flex: 1,
    flexDirection: "row"
  },
  rightHeaderContainer: {
    marginTop: 25,
    marginLeft: 55,
    marginBottom: 30,
    flex: 1,
    flexDirection: "row"
  },
  centerHeaderContainer: {
    marginTop: 30,
    marginBottom: 15,
    flex: 1,
    flexDirection: "row",
    alignSelf: "center"
  },
  sectionHeaderSymbol: {
    fontSize: 11.5,
    color: "#333333",
    letterSpacing: 0.2,
    fontWeight: "600",
    backgroundColor: "transparent",
    marginRight: 15,
    marginTop: 0.5,
    opacity: 0.6
  },
  sectionHeaderContainer: {
    marginLeft: 20,
    marginBottom: 12,
    marginTop: 25,
    flex: 1,
    flexDirection: "row"
  },
  sectionHeaderText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    color: "#333333",
    fontSize: 12,
    letterSpacing: 4,
    opacity: 0.8,
    backgroundColor: "transparent",
  },
  rightSectionHeaderSymbol: {
    fontSize: 11.5,
    color: "#333333",
    letterSpacing: 0.2,
    fontWeight: "600",
    backgroundColor: "transparent",
    marginLeft: 15,
    marginRight: 20,
    marginTop: 0.5,
    opacity: 0.6
  },
  rightSectionHeaderContainer: {
    marginLeft: 20,
    marginBottom: 12,
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  rightSectionHeaderText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    color: "#333333",
    fontSize: 12,
    letterSpacing: 4,
    opacity: 0.8,
    backgroundColor: "transparent",
  },
  centerSectionHeaderContainer: {
    marginLeft: 20,
    marginBottom: 12,
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  centerSectionHeaderText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    color: "#333333",
    fontSize: 12,
    letterSpacing: 4,
    opacity: 0.8,
    backgroundColor: "transparent",
  }
};

const Header = (props) => {
  switch (props.type) {
    case "left":
      return (
        <Animatable.View animation="fadeInRight" style={styles.leftHeaderContainer}>
          <Text style={styles.leftHeaderSymbol}>//</Text>
          <Text style={styles.leftHeaderText}>{props.title}</Text>
        </Animatable.View>
      );
    case "settings":
      return (
        <Animatable.View animation="fadeInLeft" duration={1025} style={styles.settingsHeaderContainer}>
          <Text style={styles.leftHeaderSymbol}>//</Text>
          <Text style={styles.settingsHeaderText}>{props.title}</Text>
        </Animatable.View>
      );
    case "right":
      return (
        <Animatable.View animation="fadeInRight" style={styles.centerHeaderContainer}>
          <Text style={styles.headerText}>{props.title}</Text>
        </Animatable.View>
      );
    case "leftSection":
      return (
        <Animatable.View animation="fadeInLeft" style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeaderSymbol}>//</Text>
          <Text style={styles.sectionHeaderText}>{props.title}</Text>
        </Animatable.View>
      );
    case "rightSection":
      return (
        <Animatable.View animation="fadeInRight" style={styles.rightSectionHeaderContainer}>
          <Text style={styles.rightSectionHeaderText}>{props.title}</Text>
          <Text style={styles.rightSectionHeaderSymbol}>//</Text>
        </Animatable.View>
      );
    case "centerSection"  :
      return (
        <Animatable.View animation="fadeInUp" style={styles.centerSectionHeaderContainer}>
          <Text style={styles.centerSectionHeaderText}>{props.title}</Text>
        </Animatable.View>
      );
    default:
      return (
        <Animatable.View animation="fadeInUp" style={styles.centerHeaderContainer}>
          <Text style={styles.headerText}>{props.title}</Text>
        </Animatable.View>
    );
  }
};

export { Header };
