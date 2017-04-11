import React, { Component } from 'react';
import { View, TouchableOpacity, Text, AlertIOS } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const styles = {
  container: {
    flexDirection: 'row',
    marginLeft: 25,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginRight: 25,
    marginTop: 20,
    borderColor: '#dfdfdf'
  },
  basketIcon: {
    color: '#a6a6a6',
    paddingLeft: 20,
    paddingRight: 5,
    alignSelf: 'center',
    flex: 1
  },
  icon: {
    alignSelf: 'center',
    color: '#8b8b8b',
    flex: 0.5,
    marginTop: 12,
    opacity: 1,
    backgroundColor: 'transparent'
  },
  rotatedIcon: {
    alignSelf: 'center',
    color: '#8b8b8b',
    flex: 0.5,
    marginTop: 12,
    opacity: 1,
    backgroundColor: 'transparent',
    transform: [{ rotate: '90deg' }],
    position: 'relative',
    top: 8,
    right: 6
  },
  infoContainer: {
    flex: 8
  },
  label: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    letterSpacing: 1.4,
    color: '#879099',
    marginBottom: 2,
    backgroundColor: 'transparent'
  },
  value: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    color: '#252525',
    marginTop: 2,
    backgroundColor: 'transparent'
  },
  placeholder: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    color: '#c6c6cc',
    marginTop: 2,
    backgroundColor: 'transparent'
  },
};

class ActionForm extends Component {
  constructor(props) {
    super(props);
    this.saveResponse = this.saveResponse.bind(this);
    this.renderArrow = this.renderArrow.bind(this);

    this.state = ({
      promptValue: '',
    });
  }

  saveResponse(promptValue) {
    this.setState({ promptValue: JSON.stringify(promptValue) });
  }

  renderArrow() {
    const { hideArrow, dropdown } = this.props;

    if (hideArrow) {
      return null;
    } else if (dropdown) {
      return <FaIcon name="angle-right" size={19} style={styles.rotatedIcon} />;
    } return <FaIcon name="angle-right" size={19} style={styles.icon} />;
  }

  render() {
    const { label, formLabel, hideArrow, value, placeholder, disabled } = this.props;
    const newLabel = label.toUpperCase();

    return (
      <TouchableOpacity
        activeOpacity={hideArrow ? 1 : 0.4}
        style={styles.container}
        onPress={this.props.onPress ?
          this.props.onPress :
          () => AlertIOS.prompt(formLabel, null, this.saveResponse, undefined, value)
        }
        disabled={disabled}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.label}>{newLabel}</Text>
          { value === '' || !value ? <Text style={styles.placeholder}>{placeholder}</Text> : <Text style={styles.value}>{value}</Text> }
        </View>

        {this.renderArrow(hideArrow)}
      </TouchableOpacity>
    );
  }
}

export { ActionForm };
