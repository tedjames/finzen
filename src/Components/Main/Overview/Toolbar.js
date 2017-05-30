import React, { Component } from 'react';
import { View, ScrollView, Animated } from 'react-native';
import Tool from './Tool';

export default class Toolbar extends Component {
  render() {
    const toolbarPosition = this.props.scrollY.interpolate({
      inputRange: [-50, 250],
      outputRange: [5, 10]
    });
    return (
      <Animated.View style={{ top: toolbarPosition }}>
        <ScrollView
          style={{ height: 150, paddingTop: 45, marginTop: -25, marginBottom: -20 }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <Tool name="Budgets" white />
          <Tool name="Bills" badgeCount={1} />
          <Tool name="Income" white />
          <Tool name="Savings" />
          <Tool name="Net Worth" white badgeCount={21} />
          <View style={{ width: 12 }} />
        </ScrollView>
      </Animated.View>
    );
  }
}
