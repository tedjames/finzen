import React from 'react';
import { View } from 'react-native';

const loginContainer = {
  backgroundColor: 'white',
  height: 195,
  width: 300,
  marginRight: 25,
  alignSelf: 'center',
  justifyContent: 'center',
  marginTop: 175,
  padding: 30,
  paddingBottom: 35,
  paddingTop: 35
};

const AuthForm = (props) => {
  return (
    <View>
      <View style={loginContainer}>
        {props.children}
      </View>
    </View>
  );
};

export default AuthForm;
