import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { GradientView } from '../Common';

const styles = {
  fin: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 55,
    fontWeight: '600',
    letterSpacing: 17,
    position: 'absolute',
    top: 105,
    left: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 4, height: 5 },
    textShadowRadius: 12
  },
  zen: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 55,
    fontWeight: '600',
    letterSpacing: 17,
    zIndex: 2,
    position: 'absolute',
    top: 165,
    left: 75,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 4, height: 5 },
    textShadowRadius: 12
  },
};

const AuthHeader = () => {
  return (
    <View>
      <StatusBar hidden />
      <GradientView
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 0.5, y: 1.0 }}
        style={{ height: 200 }}
        colors={['#AC70FB', '#9197F8', '#77BDF5']}
      />
      <Text style={styles.fin}>FIN</Text>
      <Text style={styles.zen}>ZEN</Text>
    </View>
  );
};

export default AuthHeader;
