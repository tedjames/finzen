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

const PasswordField = (props) => {
  return (
    <View>
      <Text style={styles.label}>PASSWORD</Text>
      <TextInput
        style={styles.field}
        placeholder={'*******'}
        onChangeText={props.onChangeText}
        value={props.password}
        autoCorrect={false}
        returnKeyType={'done'}
        autoCapitalize={'none'}
        secureTextEntry
      />
    </View>
  );
};

export default PasswordField;
