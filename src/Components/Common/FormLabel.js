import React from 'react'
import { Text } from 'react-native'

const FormLabel = (props) => {
  const label = props.text.toUpperCase();
  const labelStyle = {
    fontFamily: "Montserrat",
    fontSize: 10,
    letterSpacing: 1.4,
    color: "#879099",
    marginBottom: 2,
    backgroundColor: "transparent"
  }

  return (
    <Text style={labelStyle}>{label}</Text>
  );
};

export { FormLabel };
