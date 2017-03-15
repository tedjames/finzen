import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class Account extends Component {
  handlePress() {
    Actions.pop()
  }
  render() {
    return (
      <View>
        <Text onPress={this.handlePress}>Account Screen</Text>
      </View>
    );
  }
}
