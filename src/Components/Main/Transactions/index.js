import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import TransactionsList from './TransactionsList';

const styles = {
  searchBar: {
    width: '85%'
  },
  header: {
    paddingTop: 40,
    width: '100%',
    height: '15%',
    backgroundColor: 'transparent',
    zIndex: 1,
    alignItems: 'center',
  },
  formField: {
    fontFamily: 'Open Sans',
    fontSize: 18,
    height: 40,
    fontWeight: '400',
    width: '85%',
    color: '#333',
    alignSelf: 'center',
    zIndex: 10,
  },
  underline: {
    height: 1,
    backgroundColor: '#E2E7EB'
  },
  cancelButton: {
    right: 5,
  },
  searchButton: {
    left: 5,
    alignSelf: 'center',
    marginRight: 25
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    top: 20,
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  toolbarButton: {
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolName: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 0.5,
    color: '#444',
    marginRight: 15
  },
  divider: {
    width: 1,
    height: '45%',
    backgroundColor: '#ddd',
  },
  sortIcon: {
    top: 1
  },
  filterIcon: {
  }
};

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.renderCancel = this.renderCancel.bind(this);

    this.state = ({
      text: '',
    });
  }

  renderCancel() {
    if (this.state.text !== '') {
      return (
        <TouchableOpacity style={styles.cancelButton} onPress={() => this.setState({ text: '' })}>
          <Icon2 name="cancel" size={15} color="#d9e3ec" />
        </TouchableOpacity>
      );
    } return null;
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.searchBar}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.searchButton}>
                  <Icon name="md-search" size={20} color="#C9D6E2" />
                </TouchableOpacity>

                <TextInput
                  style={styles.formField}
                  selectionColor="#AC70FB"
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                  placeholder="Search transactions..."
                  placeholderTextColor="#888"
                  clearButtonMode="never"
                  keyboardAppearance="dark"
                  returnKeyType="done"
                />
              </View>
              {this.renderCancel()}
            </View>
            <View style={styles.underline} />
          </View>

          <View style={styles.toolbar}>
            <TouchableOpacity style={styles.toolbarButton}>
              <Text style={styles.toolName}>SORT</Text>
              <Icon3 style={styles.sortIcon} name="triangle-down" size={15} color="#ccc" />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.toolbarButton}>
              <Text style={styles.toolName}>FILTER</Text>
              <Icon4 style={styles.filterIcon} name="filter-list" size={14} color="#ccc" />
            </TouchableOpacity>
          </View>

        </View>

        <TransactionsList />
      </View>
    );
  }
}
