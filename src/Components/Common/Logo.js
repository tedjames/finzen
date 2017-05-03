import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  logo: {
    alignSelf: 'flex-start',
    position: 'relative',
    top: 30,
    left: 20
  },
  fin: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 6,
    position: 'absolute',
    top: 0,
    left: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 4, height: 5 },
    textShadowRadius: 12
  },
  zen: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 6,
    zIndex: 2,
    position: 'absolute',
    top: 15,
    left: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 4, height: 5 },
    textShadowRadius: 12
  },
};

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Text style={styles.fin}>FIN</Text>
      <Text style={styles.zen}>ZEN</Text>
    </View>
  );
};

export { Logo };
