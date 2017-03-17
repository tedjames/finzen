import React, { Component } from 'react'
import TransactionCard from './TransactionCard'
import { View, ListView, RefreshControl } from 'react-native'
import Divider from './Divider'

const styles = {
  transactionsCard: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: "#fff",
    marginRight: 0,
    marginLeft: 0,
    marginTop: -3,
    marginBottom: 147,
    paddingBottom: 7,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 0,
    borderTopWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftWidth: 1,
    borderColor: "#d1d1d1"
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
      {txid: 0, merchant: "Amazon", amount: "94.55", date: "TODAY", time: "4:30pm", location: "Online", neg: false},
      {txid: 1, merchant: "Amazon", amount: "94.55", date: "YESTERDAY ", time: "4:30pm", location: "Online", neg: true},
      {txid: 2, merchant: "Amazon", amount: "94.55", date: "JANUARY 28, 2017", time: "4:30pm", location: "Online", neg: false},
      {txid: 3, merchant: "Amazon", amount: "94.55", date: "JANUARY 28, 2017", time: "4:30pm", location: "Online", neg: true},
      {txid: 4, merchant: "Amazon", amount: "94.55", date: "JANUARY 28, 2017", time: "4:30pm", location: "Online", neg: false},
      {txid: 5, merchant: "Amazon", amount: "94.55", date: "JANUARY 27, 2017", time: "4:30pm", location: "Online", neg: true},
      {txid: 6, merchant: "Amazon", amount: "94.55", date: "JANUARY 27, 2017", time: "4:30pm", location: "Online", neg: true},
      {txid: 7, merchant: "Amazon", amount: "94.55", date: "JANUARY 27, 2017", time: "4:30pm", location: "Online", neg: false},
      {txid: 8, merchant: "Amazon", amount: "94.55", date: "JANUARY 27, 2017", time: "4:30pm", location: "Online", neg: false},
      {txid: 9, merchant: "Amazon", amount: "94.55", date: "JANUARY 27, 2017", time: "4:30pm", location: "Online", neg: false},
      {txid: 10, merchant: "Amazon", amount: "94.55", date: "JANUARY 27, 2017", time: "4:30pm", location: "Online", neg: false},
      {txid: 11, merchant: "Amazon", amount: "94.55", date: "JANUARY 26, 2017", time: "4:30pm", location: "Online", neg: false},
      {txid: 12, merchant: "Amazon", amount: "94.55", date: "JANUARY 26, 2017", time: "4:30pm", location: "Online", neg: false},
      {txid: 13, merchant: "Amazon", amount: "94.55", date: "JANUARY 25, 2017", time: "4:30pm", location: "Online", neg: false},
      {txid: 14, merchant: "Amazon", amount: "94.55", date: "JANUARY 24, 2017", time: "4:30pm", location: "Online", neg: false},
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
      <View style={styles.transactionsCard}>
        <ListView
          dataSource={this.state.dataSource}
          renderSectionHeader={this.renderSectionHeader}
          renderRow={(rowData) => <TransactionCard merchant={rowData.merchant} amount={rowData.amount} time={rowData.time} location={rowData.location} neg={rowData.neg}/>}
          refreshControl={
            <RefreshControl
              title="Syncing financial data..."
              tintColor="#ddd"
              titleColor="#a1a1a1"
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }>
        </ListView>
      </View>
    );
  }
}