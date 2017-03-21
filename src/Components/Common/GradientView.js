import React from 'react';
// Fixes eslint false positive for an import error in this file
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LinearGradient from 'react-native-linear-gradient';

const GradientView = (props) => {
  return (
    <LinearGradient colors={['#f2f2f2', '#eee']} style={{ flex: 1 }}>
      {props.children}
    </LinearGradient>
  );
};

export { GradientView };
