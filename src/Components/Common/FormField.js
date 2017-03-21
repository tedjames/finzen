import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

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
  infoContainer: {
    flex: 8
  },
  arrowIcon: {
    alignSelf: 'center',
    color: '#8b8b8b',
    flex: 0.5,
    marginTop: 12,
    opacity: 1
  },
  label: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    letterSpacing: 1.4,
    color: '#879099',
    marginBottom: 2,
    backgroundColor: 'transparent'
  },
};

class FormField extends Component {
  constructor(props) {
    super(props);

    this.convert = this.convert.bind(this);

    this.state = ({
      text: '',
      placeholder: 'Placeholder',
    });
  }

  componentWillMount() {
    const { value, placeholder } = this.props;
    if (value) {
      this.setState({ text: this.convert(value) });
    }
    if (placeholder) {
      this.setState({ placeholder });
    }
  }

  convert(number) {
    if (this.props.type === 'phone') {
      return number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    } return number;
  }

  render() {
    const {
      placeholder,
      label,
      returnKeyType,
      disabled,
      keyboardType,
      maxLength,
      autoCapitalize,
      lines,
      multiline
    } = this.props;
    const newLabel = label.toUpperCase();
    const fieldStyle = {
      fontFamily: 'Open Sans',
      fontSize: 16,
      color: '#252525',
      marginTop: 3,
      height: multiline ? 250 : 20
    };

    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>{newLabel}</Text>
          <TextInput
            style={fieldStyle}
            onChangeText={text => this.setState({ text: this.convert(text) })}
            value={this.state.text}
            placeholder={placeholder}
            returnKeyType={returnKeyType ? returnKeyType : 'done'}
            keyboardType={keyboardType ? keyboardType : 'default'}
            maxLength={maxLength}
            editable={!disabled}
            autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
            numberOfLines={lines ? lines : 1}
            multiline={multiline ? true : false}
          />
        </View>
      </View>
    );
  }
}

export { FormField };
