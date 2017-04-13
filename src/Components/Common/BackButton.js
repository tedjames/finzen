import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

// Get device dimensions for responsive components
const { height } = Dimensions.get('window');

const styles = {
  backButtonContainer: {
    height: 450,
    width: 130,
    backgroundColor: '#eeeeee',
    borderColor: '#e4e4e4',
    borderWidth: 0.5,
    marginBottom: -200,
    marginTop: -300,
    alignItems: 'center',
    flex: 1,
    position: 'relative',
    top: 100
  },
  angledContainer: {
    transform: [
      { rotate: '30deg' }
    ]
  },
  backIcon: {
    color: '#757575',
    transform: [
      { rotate: '-30deg' }
    ],
    position: 'relative',
    // Tested and supported on: iPhone6, iPhone7-Plus
    // TODO: Test this on all available iPhone models in xcode
    top: height > 667 ? 310 : 300,
    left: 15
  },
};

class BackButton extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loading) {
      this.refs.backButton.transitionTo({ opacity: 0 }, 500);
    }
  }

  render() {
    return (
      <Animatable.View ref="backButton" animation="fadeIn" delay={100} duration={2000} style={styles.angledContainer}>
        <TouchableOpacity onPress={() => Actions.pop()} activeOpacity={1} style={styles.backButtonContainer} underlayColor="#eee">
          <Icon style={styles.backIcon} name="md-arrow-round-back" size={24} />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

export { BackButton };
