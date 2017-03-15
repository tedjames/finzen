import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const GradientView = (props) => {
  return (
    <LinearGradient colors={['#f2f2f2', '#eee']} style={{ flex: 1 }}>
      {props.children}
    </LinearGradient>
  );
};

export { GradientView };
