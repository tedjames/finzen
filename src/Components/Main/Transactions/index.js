import React, { Component } from 'react';
import { StatusBar, View, TextInput, TouchableOpacity, Text, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
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
  formContainer: {
    height: 40,
    width: '85%',
  },
  formField: {
    fontFamily: 'Open Sans',
    fontSize: 19,
    height: 40,
    fontWeight: '400',
    width: '85%',
    color: '#333',
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
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    position: 'absolute',
    width: '92%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 9 },
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
      inputRange: [0, 125],
      outputRange: [60, 25],
      extrapolate: 'clamp',
    });
    const fieldOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    const toolbarPosition = this.state.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [115, 0],
      extrapolate: 'clamp'
    });
    const toolbarHeight = this.state.scrollY.interpolate({
      inputRange: [25, 125],
      outputRange: [60, 62.5],
      extrapolate: 'clamp',
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
      outputRange: ['#fff', '#fff'],
      extrapolate: 'clamp'
    });
    const toolbarShadowOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0.075, 0.1],
      extrapolate: 'clamp'
    });
    const searchButtonTop = this.state.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [11, 0],
      extrapolate: 'clamp',
      easing: Easing.ease.out
    });
    const searchButtonLeft = this.state.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [5, 8],
      extrapolate: 'clamp'
    });
    const searchButtonScale = this.state.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [1, 1.15],
      extrapolate: 'clamp'
    });
    const searchButtonOpacity = this.state.scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [0.4, 1],
      extrapolate: 'clamp'
    });

    return (
      <View>
        <StatusBar hidden />
        <View style={styles.header}>
          <Animated.View style={[styles.searchBar, { top: fieldPosition }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Animated.View
                  style={[
                    styles.searchButtonContainer,
                    {
                      top: searchButtonTop,
                      left: searchButtonLeft,
                      transform: [{ scale: searchButtonScale }]
                    }
                  ]}
                >
                  <TouchableOpacity style={styles.searchButton}>
                    <Animated.View style={{ opacity: searchButtonOpacity }}>
                      <Icon name="md-search" size={20} color="#A5ADFC" />
                    </Animated.View>
                  </TouchableOpacity>
                </Animated.View>

                <Animated.View style={[styles.formContainer, { opacity: fieldOpacity }]}>
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
                </Animated.View>

              </View>
              {this.renderCancel()}
            </View>
            <Animated.View style={[styles.underline, { opacity: fieldOpacity }]} />
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
                <Icon3 style={styles.sortIcon} name="sort" size={18} color="#9BA2FF" />
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity style={styles.toolbarButton}>
                <Text style={styles.toolName}>FILTER</Text>
                <Icon4 style={styles.filterIcon} name="filter" size={16} color="#9BA2FF" />
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
