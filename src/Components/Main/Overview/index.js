import React, { Component } from 'react';
import { ActionSheetIOS, StatusBar, ScrollView, Animated } from 'react-native';

import { GradientView } from '../../Common';
import CardCarousel from './CardCarousel';
import Toolbar from './Toolbar';
import Accounts from './Accounts';
import Header from './Header';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = ({
      scrollY: new Animated.Value(0),
    });
  }
  handleAdd() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Add Account', 'New Transaction', 'Cancel'],
      cancelButtonIndex: 2,
    },
    (buttonIndex) => {
      console.log(buttonIndex);
    });
  }

  handleScroll() {
    return Animated.event([{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]);
  }

  render() {
    return (
      <GradientView colors={['#fff', '#eceff4']}>
        <StatusBar translucent hidden />

        <ScrollView
          onScroll={this.handleScroll()}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Header />
          <CardCarousel />
          <Toolbar scrollY={this.state.scrollY} />
          <Accounts />
        </ScrollView>

      </GradientView>
    );
  }
}
