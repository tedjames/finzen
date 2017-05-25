import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  logo: {
    flex: 1
  },
  fin: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: '#a0a6ad',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 6,
    position: 'relative',
    top: 0,
    left: 0,
  },
  zen: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: '#a0a6ad',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 6,
    zIndex: 2,
    position: 'relative',
    top: -1,
    left: 13,
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
