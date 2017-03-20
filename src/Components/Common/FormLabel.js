import React from 'react'
import { Text, View } from 'react-native'

const FormLabel = (props) => {
  const { text } = props;
  const label = text.toUpperCase();
  const styles = {
    label: {
      fontFamily: "Montserrat",
      fontSize: 10,
      letterSpacing: 1.4,
      color: "#879099",
      alignSelf: "center",
      backgroundColor: "transparent"
    },
    leftDivider: {
      borderBottomWidth: 1,
      borderColor: "#eee",
      paddingBottom: 10,
      width: 100,
      marginRight: 10,
      marginLeft: 5,
      position: "relative",
      bottom: 5
    },
    rightDivider: {
      borderBottomWidth: 1,
      borderColor: "#eee",
      paddingBottom: 10,
      width: 100,
      marginRight: 5,
      marginLeft: 10,
      position: "relative",
      bottom: 5
    }
  }

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 35, marginBottom: 5}}>
      <View style={styles.leftDivider} />
      <Text style={styles.label}>{label}</Text>
      <View style={styles.rightDivider} />
    </View>

  );
};

export { FormLabel };
