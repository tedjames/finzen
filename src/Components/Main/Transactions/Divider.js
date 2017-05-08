import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
  container: {
    marginTop: 22,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  date: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    letterSpacing: 1.25,
    backgroundColor: 'transparent',
    color: '#777', // #999cac is a nice color for stuff that's usually white! (blue/white) OR #a8aaba
    fontWeight: '400',
    alignSelf: 'center',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#000',
    opacity: 0.1,
    flex: 1,
    bottom: 0,
    marginRight: 15,
    marginLeft: 15
  }
};

export default class Divider extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.divider} />
        <Text style={styles.date}>{this.props.date}</Text>
        <View style={styles.divider} />
      </View>
    );
  }
}
