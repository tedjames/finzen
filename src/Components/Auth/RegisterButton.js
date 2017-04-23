import React from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = {
  registerText: {
    flex: 1,
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    letterSpacing: 3.4,
    opacity: 0.55,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  registerButton: {
    flex: 1,
    width: 175,
    flexDirection: 'row',
    position: 'relative',
    bottom: width / 8.5,
    left: width / 8
  }
};

const RegisterButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.registerButton}
      onPress={props.onPress}
    >
      <Text style={styles.registerText}>NEW ACCOUNT</Text>
    </TouchableOpacity>
  );
};

export default RegisterButton;
