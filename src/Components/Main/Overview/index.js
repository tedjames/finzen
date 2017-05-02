import React, { Component } from 'react';
import { StatusBar, ScrollView } from 'react-native';
import Modal from 'react-native-modalbox';

import { GradientView } from '../../Common';
import CardCarousel from './CardCarousel';
import RecentTransactions from './RecentTransactions';
import Planner from './Planner';
import Accounts from './Accounts';
import Header from './Header';
import Settings from '../Settings';

const styles = {
  icon: {
    color: '#333',
    backgroundColor: 'transparent',
    opacity: 0.6,
    alignSelf: 'center'
  },
  iconContainer: {
    alignSelf: 'flex-end',
    marginRight: 0,
    position: 'relative',
    bottom: 18,
    height: 30,
    marginBottom: -8,
    width: 60,
  },
  headerText: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    fontWeight: '500',
    color: '#333333',
    letterSpacing: 4,
    backgroundColor: 'transparent',
    opacity: 0.70,
    alignSelf: 'center'
  },
  headerContainer: {
    marginTop: 28
  },
};

export default class Overview extends Component {
  render() {
    return (
      <GradientView>
        <StatusBar translucent hidden />

        <Header />
        <ScrollView>

          <CardCarousel />
          <Accounts />
          <RecentTransactions />
          <Planner />
        </ScrollView>

      </GradientView>
    );
  }
}
