import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import { Actions } from 'react-native-router-flux'

const styles = {
  backButtonContainer: {
    height: 450,
    width: 130,
    backgroundColor: "#eeeeee",
    borderColor: "#e4e4e4",
    borderWidth: 0.5,
    marginBottom: -200,
    marginTop: -300,
    alignItems: "center",
    flex: 1,
    position: "relative",
    top: 100

  },
  angledContainer: {
    transform: [
      { rotate: "30deg" }
    ]
  },
  backIcon: {
    color: "#757575",
    transform: [
      { rotate: "-30deg" }
    ],
    marginTop: 303,
    marginLeft: 15,
  },
};

class BackButton extends Component {
  constructor(props) {
    super(props);

    this.handleBackButton = this.handleBackButton.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loading) {
      this.refs.backButton.transitionTo({ opacity: 0 }, 500)
    }
  }

  handleBackButton() {
    Actions.pop();
  }

  render() {
    return (
      <Animatable.View ref="backButton" animation="fadeIn" delay={100} duration={2000} style={styles.angledContainer}>
        <TouchableOpacity onPress={this.handleBackButton} activeOpacity={1} style={styles.backButtonContainer} underlayColor="#eee">
          <Icon style={styles.backIcon} name="md-arrow-round-back" size={24} />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

export { BackButton };
