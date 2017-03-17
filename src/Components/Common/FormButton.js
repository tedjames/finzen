import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import FaIcon from 'react-native-vector-icons/FontAwesome'

class FormButton extends Component {
  render() {
    const { label, bottom } = this.props;

    const styles = {
      container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 25,
        borderBottomWidth: bottom ? 0 : 1,
        paddingBottom: 15,
        marginRight: 25,
        marginTop: 20,
        borderColor: "#f5f5f5"
      },
      infoContainer: {
        flex: 8,
      },
      arrowIcon: {
        alignSelf: "center",
        color: "#8b8b8b",
        flex: 0.5,
        opacity: 1,
        backgroundColor: "transparent"
      },
      label: {
        fontFamily: "Open Sans",
        fontSize: 15,
        letterSpacing: 0.25,
        color: "#252525",
        marginBottom: 2,
        backgroundColor: "transparent",
      },
    }

    return (
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.container}
        disabled={this.props.disabled}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>

        <FaIcon name="angle-right" size={19} style={styles.arrowIcon} />
      </TouchableOpacity>
    );
  }
}

export { FormButton };
