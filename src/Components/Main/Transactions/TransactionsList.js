import React, { Component } from 'react';
import { View, ListView, RefreshControl } from 'react-native';
import { GradientView } from '../../Common';
import TransactionCard from './TransactionCard';
import Divider from './Divider';

const styles = {
  transactionsCard: {
    backgroundColor: '#fafafa',
    paddingBottom: 138
  },
  separator: {
    height: 1,
    backgroundColor: '#8E8E8E',
  },
};

export default class TransactionsList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state = ({
      refreshing: false,
      dataSource: ds.cloneWithRowsAndSections(this.convertTransactions()),
    });
  }

  convertTransactions() {
    const transactions = [
      { txid: 0, merchant: 'Amazon', amount: '29.54', date: 'Today', time: '4:30pm', location: 'Online', neg: false },
      { txid: 1, merchant: 'Walgreens', amount: '12.41', date: 'Yesterday ', time: '12:15pm', location: 'Edison, NJ', neg: true },
      { txid: 2, merchant: 'Walmart', amount: '52.00', date: 'January 28, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 3, merchant: 'Antonio\'s Pizzaria', amount: '5.24', date: 'January 28, 2017', time: '10:43pm', location: 'Metuchen, NJ', neg: true },
      { txid: 4, merchant: 'Brown\'s Bagels', amount: '31.85', date: 'January 28, 2017', time: '8:27am', location: 'New York, NY', neg: false },
      { txid: 5, merchant: 'Amazon', amount: '94.55', date: 'January 27, 2017', time: '4:30pm', location: 'Online', neg: true },
      { txid: 6, merchant: 'Amazon', amount: '94.55', date: 'January 27, 2017', time: '4:30pm', location: 'Online', neg: true },
      { txid: 7, merchant: 'Amazon', amount: '94.55', date: 'January 27, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 8, merchant: 'Amazon', amount: '94.55', date: 'January 27, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 9, merchant: 'Amazon', amount: '94.55', date: 'January 27, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 10, merchant: 'Amazon', amount: '94.55', date: 'January 27, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 11, merchant: 'Amazon', amount: '94.55', date: 'January 26, 2017', time: '4:30pm', location: 'Online', neg: false },
      { txid: 12, merchant: 'Amazon', amount: '94.55', date: 'January 26, 2017', time: '4:30pm', location: 'Online', neg: false },
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


  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({
        refreshing: false,
      });
    }, 2000);
  };
  renderSectionHeader(sectionData, date) {
    return (
      <Divider date={date} />
    );
  }
  render() {
    return (
      <GradientView style={styles.transactionsCard} colors={['#fff', '#f5f5f5']}>
        <ListView
          dataSource={this.state.dataSource}
          renderSectionHeader={this.renderSectionHeader}
          renderRow={rowData => <TransactionCard merchant={rowData.merchant} amount={rowData.amount} time={rowData.time} location={rowData.location} neg={rowData.neg}/>}
          stickySectionHeadersEnabled={false}
          refreshControl={
            <RefreshControl
              title="Syncing financial data..."
              tintColor="#ddd"
              titleColor="#444"
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        />
    </GradientView>
    );
  }
}
