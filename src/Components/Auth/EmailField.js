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
  }
};

const EmailField = (props) => {
  return (
    <View style={styles.emailField}>
      <Text style={styles.label}>USERNAME</Text>
      <TextInput
        style={styles.field}
        placeholder={'your@email.com'}
        onChangeText={props.onChangeText}
        value={props.email}
        returnKeyType={'done'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
    </View>
  );
};

export default EmailField;
