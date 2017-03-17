import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native'

class FormSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      text: '',
      placeholder: 'Placeholder',
      switchOn: false
    });
  }

  componentWillMount() {
    const { value, placeholder } = this.props;
    if (value) {
      this.setState({ text: value })
    }
    if (placeholder) {
      this.setState({ placeholder })
    }
  }

  render() {
    const { placeholder, label, returnKeyType, value, disabled, keyboardType, maxLength, autoCapitalize, bottom } = this.props;

    const styles = {
      container: {
        flexDirection: "row",
        marginLeft: 25,
        borderBottomWidth: bottom ? 0 : 1,
        paddingBottom: 10,
        marginRight: 25,
        marginTop: 20,
        borderColor: "#f5f5f5"
      },
      infoContainer: {
        flex: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      arrowIcon: {
        alignSelf: "center",
        color: "#8b8b8b",
        flex: 0.5,
        marginTop: 12,
        opacity: 1
      },
      label: {
        fontFamily: "Open Sans",
        fontSize: 15,
        letterSpacing: 0.25,
        color: "#252525",
        marginBottom: 2,
        backgroundColor: "transparent",
      },
      field: {
        fontFamily: "Open Sans",
        fontSize: 16,
        color: "#252525",
        marginTop: 3,
        height: 20
      },
    }

    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>{label}</Text>
          <Switch
            onValueChange={(value) => this.setState({ switchOn: value })}
            value={this.state.switchOn}
            disabled={this.props.disabled}
          />
        </View>
      </View>
    );
  }
}

export { FormSwitch };
