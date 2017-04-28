import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
  container: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  date: {
    fontFamily: 'Open Sans',
    fontSize: 10.5,
    letterSpacing: 2.75,
    backgroundColor: 'transparent',
    color: '#878a96', // #999cac is a nice color for stuff that's usually white! (blue/white) OR #a8aaba
    fontWeight: '600',
    marginBottom: 5,
    alignSelf: 'center'
  },
  divider: {
    height: 1,
    backgroundColor: '#e3e3e3',
    flex: 1,
    bottom: 2,
    marginRight: 15,
    marginLeft: 15
  }
};

export default class Divider extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.divider} />
        <Text style={styles.date}>{this.props.date.toUpperCase()}</Text>
        <View style={styles.divider} />
      </View>
    );
  }
}
