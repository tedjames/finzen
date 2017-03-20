import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class FormButton extends Component {
  render() {
    const { label, bottom, danger, centered, offset, hideArrow, topBorder } = this.props;

    const styles = {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 25,
        borderBottomWidth: bottom ? 0 : 1,
        borderTopWidth: topBorder ? 1 : 0,
        paddingBottom: 17,
        paddingTop: topBorder ? 17 : 0,
        marginRight: 25,
        marginTop: offset ? offset + 20 : 20,
        borderColor: '#f5f5f5'
      },
      infoContainer: {
        flex: 8,
      },
      centeredInfoContainer: {
        flex: 8,
        alignItems: 'center',
      },
      arrowIcon: {
        alignSelf: 'center',
        color: danger ? '#fb5d5d' : '#8b8b8b',
        flex: 0.5,
        opacity: hideArrow ? 0 : 1,
        backgroundColor: 'transparent'
      },
      label: {
        fontFamily: 'Open Sans',
        fontSize: 15,
        letterSpacing: 0.25,
        color: danger ? 'rgba(255, 82, 82, 1)' : '#252525',
        backgroundColor: 'transparent',
      },
    };

    return (
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.container}
        disabled={this.props.disabled}
      >
        <View style={centered ? styles.centeredInfoContainer : styles.infoContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>

        { centered ? null : <FaIcon name="angle-right" size={19} style={styles.arrowIcon} /> }
      </TouchableOpacity>
    );
  }
}

export { FormButton };
