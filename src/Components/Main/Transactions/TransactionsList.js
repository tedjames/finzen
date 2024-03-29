import React, { Component } from 'react';
import { Animated, ListView, RefreshControl } from 'react-native';
import { GradientView } from '../../Common';
import TransactionCard from './TransactionCard';
import Divider from './Divider';

const styles = {
  transactionsCard: {
    height: '100%'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 0,
    right: 37.5,
    height: 65,
    width: 65,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.25,
    borderColor: '#9BA2FF',
    backgroundColor: '#fcfcfc',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  }
};

export default class TransactionsList extends Component {
  constructor(props) {
    super(props);
    this.onRefresh = this.onRefresh.bind(this);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state = ({
      refreshing: false,
      dataSource: ds.cloneWithRowsAndSections(this.convertTransactions()),
    });
  }

  onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({
        refreshing: false,
      });
    }, 2000);
  };

  convertTransactions() {
    // BUG: REFORMAT THE DATES TO RESOLVE SORTING BY DATE ISSUE
    const transactions = [
      { txid: 0, merchant: 'Amazon', amount: '29.54', date: 'January 28, 2017', time: '4:30pm', location: 'Online', neg: true },
      { txid: 1, merchant: 'Walgreens', amount: '12.41', date: 'January 28, 2017 ', time: '4:15pm', location: 'Edison, NJ', neg: true },
      { txid: 2, merchant: 'Google', amount: '5,912.00', date: 'January 28, 2017', time: '2:30pm', location: 'Paycheck', neg: false },
      { txid: 3, merchant: 'Antonio\'s Pizzaria', amount: '5.24', date: 'January 28, 2017', time: '1:43pm', location: 'Metuchen, NJ', neg: true },
      { txid: 4, merchant: 'Brown\'s Bagels', amount: '31.85', date: 'January 28, 2017', time: '8:27am', location: 'New York, NY', neg: true },
      { txid: 5, merchant: 'Ikea', amount: '179.95', date: 'January 27, 2017', time: '8:19pm', location: 'Brooklyn, NY', neg: true },
      { txid: 6, merchant: 'Amazon', amount: '94.55', date: 'January 27, 2017', time: '4:30pm', location: 'Online', neg: true },
      { txid: 7, merchant: 'Google', amount: '5,912.00', date: 'January 27, 2017', time: '1:30pm', location: 'Paycheck', neg: false },
      { txid: 8, merchant: 'Amazon', amount: '94.55', date: 'January 26, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 9, merchant: 'Amazon', amount: '94.55', date: 'January 26, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 10, merchant: 'Amazon', amount: '94.55', date: 'January 26, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 11, merchant: 'Amazon', amount: '94.55', date: 'January 26, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 12, merchant: 'Amazon', amount: '94.55', date: 'January 25, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 13, merchant: 'Amazon', amount: '94.55', date: 'January 25, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 14, merchant: 'Amazon', amount: '94.55', date: 'January 24, 2017', time: '4:30pm', location: 'Online', neg: false },
    ];
    const transactionsMap = {}; // Create the blank map
    transactions.forEach((transaction) => {
      if (!transactionsMap[transaction.date]) {
        transactionsMap[transaction.date] = [];
      }
      transactionsMap[transaction.date].push(transaction);
    });
    return transactionsMap;
  }

  renderSectionHeader(sectionData, date) {
    return (
      <Divider date={date} />
    );
  }

  render() {
    const emptyHeaderHeight = this.props.scrollY.interpolate({
      inputRange: [0, 105],
      outputRange: [175, 62.5],
      extrapolate: 'clamp'
    });
    return (
      <GradientView style={styles.transactionsCard} colors={['#fff', '#eceff4']}>
        <Animated.View style={{ height: emptyHeaderHeight }} />
        <ListView
          ref="listview"
          showsVerticalScrollIndicator={false}
          onScroll={this.props.onScroll}
          scrollEventThrottle={16}
          dataSource={this.state.dataSource}
          renderSectionHeader={this.renderSectionHeader}
          renderRow={rowData =>
            <TransactionCard
              merchant={rowData.merchant}
              amount={rowData.amount}
              time={rowData.time}
              location={rowData.location}
              neg={rowData.neg}
            />
          }
          stickySectionHeadersEnabled={false}
          refreshControl={
            <RefreshControl
              title="Syncing financial data..."
              tintColor="#ddd"
              titleColor="#444"
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        />
      </GradientView>
    );
  }
}
