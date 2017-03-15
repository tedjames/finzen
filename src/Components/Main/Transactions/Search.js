import React, { Component } from 'react';
import SearchBar from 'react-native-search-bar'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      searchTerm: "",
      showsCancelButton: false
    });
  }
  showKeyboard() {
    this.refs.searchBar.focus()
  }

  hideKeyboard() {
    this.refs.searchBar.unFocus()
    this.setState({ showsCancelButton: false });
  }
  render() {
    return (
      <SearchBar
        hideBackground
        barTintColor="#55cbfe"
        searchBarStyle="prominent"
        ref='searchBar'
        placeholder='Search'
        text={this.state.searchTerm}
        onChangeText={(text) => this.setState({ searchTerm: text })}
        onSearchButtonPress={this.hideKeyboard.bind(this)}
        onCancelButtonPress={this.hideKeyboard.bind(this)}
        showsCancelButton={this.state.showsCancelButton}
        onFocus={() => this.setState({ showsCancelButton: true })}
        />
    );
  }
}
