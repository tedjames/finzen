import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Animated, Platform } from 'react-native';
import { TabViewAnimated, TabBar, TabViewPagerPan, TabViewPagerScroll, TabViewPagerAndroid } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { redirect } from '../../Actions/routerActions';
// Routes
import Analysis from './Analysis';
import Transactions from './Transactions';
import Overview from './Overview';

const styles = {
  container: {
    flexGrow: 1,
  },
  tabbar: {
    backgroundColor: '#fff',
    shadowOpacity: 0.1,
    shadowColor: 'black',
    shadowRadius: 12
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
    index: 1,
    routes: [
      { key: '1', size: 20, icon: 'signal' },
      { key: '2', size: 23, icon: 'compass' },
      { key: '3', size: 20, icon: 'exchange' }
    ],
  };

  handleChangeTab = (index) => {
    this.setState({ index });
  };

  renderBadge = ({ route }) => {
    if (route.key === '8') {
      return (
        <View style={styles.badge}>
          <Text style={styles.count}>42</Text>
        </View>
      );
    }
    return null;
  };

  renderIcon = ({ route }: any) => {
    return (
      <Icon
        name={route.icon}
        size={route.size}
        style={styles.icon}
      />
    );
  };

  renderIndicator = (props) => {
    const { width, position } = props;

    const translateX = Animated.multiply(position, width);

    return (
      <Animated.View style={[styles.container, { width, transform: [{ translateX }] }]}>
        <View style={styles.indicator} />
      </Animated.View>
    );
  };

  renderFooter = (props) => {
    return (
      <TabBar
        {...props}
        renderIcon={this.renderIcon}
        renderBadge={this.renderBadge}
        renderIndicator={this.renderIndicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        translucent
      />
    );
  };

  renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <Analysis />;
      case '2':
        return <Overview />;
      case '3':
        return <Transactions />;
      default:
        return null;
    }
  };

  renderPager = (props) => {
    switch (Platform.OS) {
      case 'ios':
        return (
          <TabViewPagerScroll
            {...props}
            animationEnabled
            swipeEnabled
            translucent
          />
        );
      case 'android':
        return (
          <TabViewPagerAndroid
            {...props}
            animationEnabled
            swipeEnabled
          />
        );
      default:
        return (
          <TabViewPagerPan
            {...props}
            swipeEnabled
          />
        );
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderFooter={this.renderFooter}
        renderPager={this.renderPager}
        onRequestChangeTab={this.handleChangeTab}
        translucent
      />
    );
  }
}

const mapStateToProps = (state) => {
  /* eslint-disable no-undef */
  /* eslint-disable no-return-assign */
  return { currentPage } = state.mainRouter;
  /* eslint-enable no-undef */
  /* eslint-enable no-return-assign */
};

export default connect(mapStateToProps, { redirect })(MainRouter);
