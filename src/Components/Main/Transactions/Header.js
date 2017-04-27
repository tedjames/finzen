import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

const styles = {
  filterIcon: {
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  iconContainer: {
    padding: 20
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '400',
    color: '#444',
    letterSpacing: 4,
    backgroundColor: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.025)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  },
  headerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5
  },
};

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={props.onSearchPress}>
        <Icon name="search" size={15} style={styles.filterIcon} color="#777" />
      </TouchableOpacity>
      <Text style={styles.text}>TRANSACTIONS</Text>
      <TouchableOpacity style={styles.iconContainer} onPress={props.onFilterPress}>
        <Icon name="settings" size={17} style={styles.filterIcon} color="#777" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
