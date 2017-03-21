import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import * as Animatable from 'react-native-animatable';
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LinearGradient from 'react-native-linear-gradient';
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */
import Snackbar from 'react-native-snackbar';
import { Actions } from 'react-native-router-flux';

const styles = {
  saveButton: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingTop: 18,
    paddingBottom: 18,
    zIndex: 1,
    shadowColor: '#8788ff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 2,
  },
  buttonText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    letterSpacing: 1.25,
    position: 'relative',
    bottom: 0,
    opacity: 1,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '400',
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 2 },
    shadowOpacity: 0,
    shadowRadius: 1,
    transform: [{ scale: 1 }],
  },
  spinner: {
    opacity: 0,
    marginBottom: 0,
  }
};

class SaveButton extends Component {
  constructor(props) {
    super(props);

    this.renderSpinner = this.renderSpinner.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleFail = this.handleFail.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { offset, disableAnimation } = this.props;
    if (nextProps.loading && !disableAnimation) {
      this.refs.spinner.transitionTo({ opacity: 0.75 }, 2000);
      this.refs.buttonTextContainer.transitionTo({ bottom: 122 }, 1);
      this.refs.buttonText.transitionTo({ shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4, opacity: 1, transform: [{ scale: 1.05 }] }, 6500);
      this.refs.saveButton.transitionTo({ width: 400, height: 700, borderRadius: 0, marginTop: 0, bottom: offset ? offset : 150 }, 300, 'ease-in-out');
    }
    if (nextProps.success) {
      this.handleSuccess();
    }

    if (nextProps.fail) {
      this.handleFail();
    }
  }

  handleSuccess() {
    this.refs.buttonText.transitionTo({ transform: [{ scale: 1.075 }] }, 375, 'ease-in');
    setTimeout(() => {
      this.refs.buttonTextContainer.transitionTo({ left: 200, opacity: 0 }, 200, 'ease-in');
      this.refs.spinner.transitionTo({ opacity: 0.25 }, 200, 'ease-in');
      setTimeout(() => {
        Actions.pop();
        Snackbar.show({
          title: 'Changes were successfully saved',
          duration: Snackbar.LENGTH_SHORT,
        });
      }, 200);
    }, 400);
  }

  handleFail() {
    this.refs.buttonText.transitionTo({ transform: [{ scale: 1.075 }] }, 375, 'ease-in');
    setTimeout(() => {
      this.refs.buttonTextContainer.transitionTo({ left: 200, opacity: 0 }, 200, 'ease-in');
      this.refs.spinner.transitionTo({ opacity: 0.25 }, 200, 'ease-in');
      setTimeout(() => {
        Actions.pop();
        Snackbar.show({
          title: 'Changes were unable to be saved',
          duration: Snackbar.LENGTH_SHORT,
        });
      }, 200);
    }, 400);
  }

  renderSpinner() {
    const { loading, disableAnimation } = this.props;
    if (loading && !disableAnimation) {
      return (
        <Spinner type="Arc" size={250} color="#3ee8ff" isVisible />
      );
    } return null;
  }

  render() {
    const { width, disableAnimation, disabled, onPress } = this.props;
    const saveButtonContainer = {
      flex: 1,
      flexDirection: 'row',
      width: width ? width : 200,
      height: 50,
      marginTop: 20,
      alignSelf: 'center',
      position: 'relative',
      zIndex: 5
    };
    if (disableAnimation) {
      return (
        <Animatable.View animation="fadeInUp" style={saveButtonContainer} >
          <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.6}
            onPress={onPress}
          >
            <LinearGradient
              start={{ x: 0.1, y: 0.25 }}
              end={{ x: 1.6, y: 1.5 }}
              colors={['#7e41ff', '#5AFFFB']}
              style={styles.saveButton}
            >
              <View ref="spinner" style={styles.spinner}>
                {this.renderSpinner()}
              </View>

              <View ref="buttonTextContainer" style={{ position: 'relative', bottom: 0 }}>
                <Animatable.Text ref="buttonText" style={styles.buttonText}>{this.props.text}</Animatable.Text>
              </View>

            </LinearGradient>
          </TouchableOpacity>
        </Animatable.View>
      );
    } return (
      <Animatable.View ref="saveButton" animation="fadeInUp" style={saveButtonContainer} >
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={0.6}
          onPress={onPress}
        >
          <LinearGradient
            start={{ x: 0.1, y: 0.25 }}
            end={{ x: 1.6, y: 1.5 }}
            colors={['#7e41ff', '#5AFFFB']}
            style={styles.saveButton}
          >
            <Animatable.View ref="spinner" style={styles.spinner}>
              {this.renderSpinner()}
            </Animatable.View>

            <Animatable.View ref="buttonTextContainer" style={{ position: 'relative', bottom: 0 }}>
              <Animatable.Text ref="buttonText" style={styles.buttonText}>{this.props.text}</Animatable.Text>
            </Animatable.View>

          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

export { SaveButton };
