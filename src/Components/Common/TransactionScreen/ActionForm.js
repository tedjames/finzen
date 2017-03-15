import React, { Component } from 'react';
import { View, TouchableOpacity, Text, AlertIOS } from 'react-native'
import FaIcon from './FaIcon'

const styles = {
  container: {
    flexDirection: "row",
    marginLeft: 25,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginRight: 25,
    marginTop: 20,
    borderColor: "#dfdfdf"
  },
  basketIcon: {
    color: "#a6a6a6",
    paddingLeft: 20,
    paddingRight: 5,
    alignSelf: "center",
    flex: 1
  },
  infoContainer: {
    flex: 8
  },
  arrowIcon: {
    alignSelf: "center",
    color: "#8b8b8b",
    flex: 0.5,
    marginTop: 12,
    opacity: 1
  },
  label: {
    fontFamily: "Montserrat",
    fontSize: 10,
    letterSpacing: 1.4,
    color: "#879099",
    marginBottom: 2,
  },
  value: {
    fontFamily: "Open Sans",
    fontSize: 16,
    color: "#252525",
    marginTop: 2
  },
}

export default class ActionForm extends Component {
  constructor(props) {
    super(props);
    this.saveResponse = this.saveResponse.bind(this);

    this.state = ({
      promptValue: "",
    });
  }
  renderArrow(hideArrow) {
    if (hideArrow) {
      return null;
    } else {
      return <FaIcon name="angle-right" size={19} style={styles.arrowIcon} />;
    }
  }
  saveResponse(promptValue) {
    this.setState({ promptValue: JSON.stringify(promptValue) });
  }
  capitalize(str) {
    const newStr = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });
    return newStr;
  }
  render() {
    const label = this.props.label;
    const newLabel = this.capitalize(label);
    return (
      <TouchableOpacity
        activeOpacity={this.props.hideArrow ? 1 : 0.4}
        style={styles.container}
        onPress={() => AlertIOS.prompt(newLabel, null, this.saveResponse, undefined, this.props.value)}
        disabled={this.props.disabled}
      >
        {/* <FaIcon name="shopping-basket" size={18} style={styles.basketIcon} /> */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>{this.props.label}</Text>
          <Text style={styles.value}>{this.props.value}</Text>
        </View>

        {this.renderArrow(this.props.hideArrow)}
      </TouchableOpacity>
    );
  }
}
