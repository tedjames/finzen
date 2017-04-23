import React from 'react';
import { View, Text, TextInput } from 'react-native';

const styles = {
  label: {
    fontFamily: 'Montserrat',
    fontSize: 11,
    letterSpacing: 1.4,
    color: '#879099',
    opacity: 0.85,
    marginBottom: 5,
    backgroundColor: 'transparent'
  },
  field: {
    height: 25,
    fontFamily: 'Open Sans',
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: '400'
  },
  divider: {
    height: 1,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#eee'
  }
};

const Field = (props) => {
  return (
    <View style={styles.emailField}>
      <Text style={styles.label}>{props.label ? props.label.toUpperCase() : 'LABEL'}</Text>
      <TextInput
        style={styles.field}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        returnKeyType={'done'}
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry ? true : false}
      />
      <View style={styles.divider} />
    </View>
  );
};

export default Field;
