import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const FaIcon = (props) => {
  return (
    <Icon name={props.name} size={props.size} style={props.style} />
  );
};

export default FaIcon;
