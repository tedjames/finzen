import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GradientView } from '../Common';

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

const styles = {
  loginButton: {
    height: 75,
    width: 75,
    alignSelf: 'flex-end',
    position: 'relative',
    right: 30,
    bottom: 55,
  },
  playIcon: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    color: 'white'
  },
  loginContainer: {
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
  },
  error: {
    color: 'red',
    fontFamily: 'Montserrat',
    fontSize: 11,
    letterSpacing: 1.1,
    fontWeight: '400',
    top: 12
  }
};

const AuthForm = (props) => {
  if (props.loading) {
    return <Text>Loading...</Text>;
  } return (
    <View>
      <View style={loginContainer}>
        {props.children}
        { props.error ? <Text style={styles.error}>AUTHENTICATION FAILED</Text> : null }
      </View>
      <TouchableOpacity onPress={props.onSubmit} style={styles.loginButton} activeOpacity={0.6}>
        <GradientView start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} style={{ height: '100%', justifyContent: 'center' }} colors={['#AC70FB', '#9197F8', '#77BDF5']}>
          <Icon style={styles.playIcon} name="md-play" size={15} />
        </GradientView>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;
