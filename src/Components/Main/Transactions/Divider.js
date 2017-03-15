import React from 'react'
import { View, Text } from 'react-native'

const styles = {
  dayDivider: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eaeff1",
    paddingTop: 6,
    paddingBottom: 4,
    paddingLeft: 9,
  },
  date: {
    backgroundColor: "transparent",
    fontFamily: "Open Sans",
    fontSize: 11,
    letterSpacing: 2,
    color: "#999cac", // this is a nice color for stuff that's usually white! (blue/white) OR #a8aaba
    fontWeight: "600",
    alignSelf: "center",
  }
};

const Divider = (props) => {
  return (
    <View style={styles.dayDivider}>
      <Text style={styles.date}>{props.date}</Text>
    </View>
  );
};

export default Divider;
