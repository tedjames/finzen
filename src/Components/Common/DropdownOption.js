import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class DropdownOption extends Component {
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
      this.setState({ text: value });
    }
    if (placeholder) {
      this.setState({ placeholder });
    }
  }

  render() {
    const { disableDivider, label, onPress } = this.props;

    const styles = {
      container: {
        alignItems: 'center',
        borderBottomWidth: disableDivider ? 0 : 1,
        borderColor: '#dfdfdf'
      },
      button: {
        alignSelf: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        width: '100%',
      },
      label: {
        fontFamily: 'Open Sans',
        fontSize: 15,
        letterSpacing: 0.25,
        color: '#252525',
        marginBottom: 2,
        backgroundColor: 'transparent',
        textAlign: 'center'
      },
      field: {
        fontFamily: 'Open Sans',
        fontSize: 16,
        color: '#252525',
        marginTop: 3,
        height: 20
      },
    };

    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} underlayColor={'#eee'} onPress={onPress}>
          <Text style={styles.label}>{label}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export { DropdownOption };
