import React, { Component } from 'react';
import { StatusBar, View, TextInput, TouchableOpacity, Text, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Octicons';
import TransactionsList from './TransactionsList';

const styles = {
  searchBar: {
    width: '91%'
  },
  header: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 1,
    alignItems: 'center',
  },
  formField: {
    fontFamily: 'Open Sans',
    fontSize: 19,
    height: 40,
    fontWeight: '400',
    width: '85%',
    color: '#333',
    alignSelf: 'center',
    zIndex: 2,
  },
  underline: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#E2E7EB'
  },
  cancelButton: {
    right: 15,
  },
  searchButton: {
    left: 5,
    alignSelf: 'center',
    marginRight: 25,
    top: 2
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    position: 'absolute',
    width: '92%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 10 },
    shadowRadius: 7,
    zIndex: -1
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
    color: '#364652',
    marginRight: 15,
    backgroundColor: 'transparent'
  },
  divider: {
    width: 1,
    height: '45%',
    backgroundColor: '#ddd',
  },
  sortIcon: {
    top: 1,
    backgroundColor: 'transparent'
  },
  filterIcon: {
    backgroundColor: 'transparent'
  }
};

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.renderCancel = this.renderCancel.bind(this);

    this.state = ({
      text: '',
      scrollY: new Animated.Value(0),
    });
  }

  renderCancel() {
    if (this.state.text !== '') {
      return (
        <TouchableOpacity style={styles.cancelButton} onPress={() => this.setState({ text: '' })}>
          <Icon2 name="cancel" size={15} color="#C9D6E2" />
        </TouchableOpacity>
      );
    } return null;
  }

  render() {
    const fieldPosition = this.state.scrollY.interpolate({
      // inputRange: [ starting scroll position , ending scroll position ]
      inputRange: [0, 125],
      // outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      outputRange: [60, 25],
      extrapolate: 'clamp',
    });
    const toolbarPosition = this.state.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [115, 0],
      extrapolate: 'clamp'
    });
    const toolbarHeight = this.state.scrollY.interpolate({
      inputRange: [25, 125],
      outputRange: [60, 80],
      extrapolate: 'clamp',
      easing: Easing.ease
    });
    const toolbarWidth = this.state.scrollY.interpolate({
      inputRange: [25, 125],
      outputRange: ['92%', '100%'],
      extrapolate: 'clamp',
      easing: Easing.ease
    });
    const toolbarBorderRadius = this.state.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [10, 0],
      extrapolate: 'clamp',
    });
    const toolbarChildrenOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 70],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    const toolbarChildrenScale = this.state.scrollY.interpolate({
      inputRange: [0, 90],
      outputRange: [1, 0.9],
      extrapolate: 'clamp',
      easing: Easing.ease
    });
    const toolbarColor = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: ['#fff', '#f5f5f5'],
      extrapolate: 'clamp'
    });
    const toolbarShadowOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0.075, 0.125],
      extrapolate: 'clamp'
    });

    return (
      <View>
        <StatusBar hidden />
        <View style={styles.header}>
          <Animated.View style={[styles.searchBar, { top: fieldPosition }]}>
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
                  placeholderTextColor="#475b6a"
                  clearButtonMode="never"
                  keyboardAppearance="dark"
                  returnKeyType="done"
                />

              </View>
              {this.renderCancel()}
            </View>
            <View style={styles.underline} />
          </Animated.View>

          <Animated.View
            style={[
              styles.toolbar, {
                top: toolbarPosition,
                height: toolbarHeight,
                width: toolbarWidth,
                borderRadius: toolbarBorderRadius,
                backgroundColor: toolbarColor,
                shadowOpacity: toolbarShadowOpacity
              }]}
          >
            <Animated.View style={{ opacity: toolbarChildrenOpacity, flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', transform: [{ scale: toolbarChildrenScale }] }}>

              <TouchableOpacity style={styles.toolbarButton}>
                <Text style={styles.toolName}>SORT</Text>
                <Icon3 style={styles.sortIcon} name="triangle-down" size={15} color="#ccc" />
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity style={styles.toolbarButton}>
                <Text style={styles.toolName}>FILTER</Text>
                <Icon2 style={styles.filterIcon} name="filter-list" size={14} color="#ccc" />
              </TouchableOpacity>

            </Animated.View>
          </Animated.View>

        </View>

        <TransactionsList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
          )}
          scrollY={this.state.scrollY}
        />

      </View>
    );
  }
}
