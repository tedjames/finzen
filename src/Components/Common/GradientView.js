import React from 'react';
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LinearGradient from 'react-native-linear-gradient';

const defaultColors = ['#f2f2f2', '#eee'];

const GradientView = (props) => {
  return (
    <LinearGradient
      colors={props.colors ? props.colors : defaultColors}
      style={props.style ? props.style : { flex: 1 }}
    >
      {props.children}
    </LinearGradient>
  );
};

export { GradientView };
