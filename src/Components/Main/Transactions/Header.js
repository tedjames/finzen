import React from 'react'
import { Text, View ,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Octicons'

const styles = {
  filterIcon: {
    color: "#333",
    backgroundColor: "transparent",
    opacity: 0.6,
    alignSelf: "center"
  },
  iconContainer: {
    alignSelf: "flex-end",
    marginRight: 0,
    position: "relative",
    bottom: 18,
    height: 30,
    marginBottom: -8,
    width: 60,
  },
  headerText: {
    fontFamily: "Montserrat",
    fontSize: 13,
    fontWeight: "500",
    color: "#333333",
    letterSpacing: 4,
    backgroundColor: "transparent",
    opacity: 0.70,
    alignSelf: "center"
  },
  headerContainer: {
    marginTop: 28
  },
};

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>TRANSACTIONS</Text>
      <TouchableOpacity style={styles.iconContainer} onPress={this.showActionSheet}>
        <Icon name="settings" size={20} style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
