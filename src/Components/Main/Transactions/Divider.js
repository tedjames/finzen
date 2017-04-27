import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
  dayDivider: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderColor: '#eaeff1',
    marginTop: 10
  },
  date: {
    fontFamily: 'Open Sans',
    fontSize: 10,
    letterSpacing: 2.75,
    backgroundColor: 'transparent',
    color: '#999cac', // #999cac is a nice color for stuff that's usually white! (blue/white) OR #a8aaba
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10
  },
  date2: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    letterSpacing: 1.25,
    backgroundColor: 'transparent',
    color: '#444', // #999cac is a nice color for stuff that's usually white! (blue/white) OR #a8aaba
    fontWeight: '300',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10
  }
};

export default class Divider extends Component {
  render() {
    return (
      <View style={styles.dayDivider}>
        <Text style={styles.date2}>{this.props.date}</Text>
      </View>
    );
  }
}
