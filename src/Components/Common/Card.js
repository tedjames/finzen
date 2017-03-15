import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const styles = {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      margin: 10,
      width: props.width,
      height: props.height
  };
  return (
    <View style={styles}>
      {props.children}
    </View>
  );
};



export { Card };
