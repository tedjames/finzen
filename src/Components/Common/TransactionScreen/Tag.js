import React from 'react'
import { View, Text } from 'react-native'

const Tag = (props) => {
  const styles = {
    tag: {
      backgroundColor: "transparent",
      marginTop: 4,
      flexDirection: "row",
    },
    title: {
      backgroundColor: "transparent",
      color: "#252525",
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: 13,
      alignSelf: "center",
      letterSpacing: 0.75
    },
    circleIcon: {
      height: 11,
      width: 11,
      alignSelf: "center",
      borderRadius: 50,
      backgroundColor: "transparent",
      borderColor: props.color,
      borderWidth: 1.5,
      marginRight: 7,
      marginTop: 1
    }
  }
  return (
    <View style={[styles.tag, props.style]}>
      <View style={styles.circleIcon} />
      <Text style={styles.title}>{props.name}</Text>
    </View>
  );
};

export default Tag;
