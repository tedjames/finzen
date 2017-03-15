// Bae
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { redirect } from '../../Actions/routerActions'
// Native Components
import { Text, View, Animated, Platform } from 'react-native'
// React-Native-Elements Tab Bar
// import { Tabs, Tab } from 'react-native-elements'
// Navigation Tabs
import { TabViewAnimated, TabBar, TabViewPagerPan, TabViewPagerScroll, TabViewPagerAndroid } from 'react-native-tab-view'
// Icons
import Icon from 'react-native-vector-icons/FontAwesome'
// Routes

import Analysis from './Analysis'
import Transactions from './Transactions'
import Overview from './Overview'
import Notifications from './Notifications'
import Settings from './Settings'

const styles = {
  container: {
    flexGrow: 1,
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  tab: {
    padding: 0,
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#adadad',
    marginTop: 15,
    marginBottom: 15
  },
  indicator: {
    flexGrow: 1,
    backgroundColor: '#a185df',
    marginTop: 50,
    borderRadius: 2,
    marginRight: 3,
    marginLeft: 3
  },
  badge: {
    marginTop: 4,
    marginRight: 18,
    backgroundColor: '#f44336',
    height: 18,
    width: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  count: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: -2,
  },
  page: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class MainRouter extends Component {
  state = {
    index: 2,
    routes: [
      { key: '1', size: 20, icon: 'signal' },
      { key: '2', size: 20, icon: 'exchange' },
      { key: '3', size: 23, icon: 'compass' },
      { key: '4', size: 20, icon: 'cogs' }
    ],
  };

  _renderIndicator = (props) => {
    const { width, position } = props;

    const translateX = Animated.multiply(position, width);

    return (
      <Animated.View
        style={[ styles.container, { width, transform: [ { translateX } ] } ]}
      >
        <View style={styles.indicator} />
      </Animated.View>
    );
  };

  _renderIcon = ({ route }: any) => {
    return (
      <Icon
        name={route.icon}
        size={route.size}
        style={styles.icon}
      />
    );
  };

  _renderBadge = ({ route }) => {
    if (route.key === '8') {
      return (
        <View style={styles.badge}>
          <Text style={styles.count}>42</Text>
        </View>
      );
    }
    return null;
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderFooter = (props) => {
    return (
      <TabBar
        {...props}
        renderIcon={this._renderIcon}
        renderBadge={this._renderBadge}
        renderIndicator={this._renderIndicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <Analysis />;
    case '2':
      return <Transactions />;
    case '3':
      return <Overview />;
    case '4':
      return <Settings />;
    default:
      return null;
    }
  };

  _renderPager = (props) => {
    switch (Platform.OS) {
    case 'ios':
      return (
        <TabViewPagerScroll
          {...props}
          animationEnabled={false}
          swipeEnabled={false}
        />
      );
    case 'android':
      return (
        <TabViewPagerAndroid
          {...props}
          animationEnabled={false}
          swipeEnabled={false}
        />
      );
    default:
      return (
        <TabViewPagerPan
          {...props}
          swipeEnabled={false}
        />
      );
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        renderPager={this._renderPager}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const mapStateToProps = state => {
  return { currentPage } = state.mainRouter;
};

export default connect(mapStateToProps, { redirect })(MainRouter);
