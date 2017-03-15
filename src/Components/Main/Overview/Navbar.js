import React, { PropTypes } from 'react'
import { NavigationBar, Icon, View, Title } from '@shoutem/ui'
import { connect } from 'react-redux'
import { openSidebar, closeSidebar } from '../../../Actions/routerActions';

const Navbar = (props) => {
  return (
    <View style={{ marginBottom: 70, marginTop: -10 }}>
      <NavigationBar
        centerComponent={<Title style={{ fontSize: 13, letterSpacing: 1.6 }}>OVERVIEW</Title>}
        leftComponent={<Icon name="sidebar" />}
        rightComponent={<Icon name="ic_bell" />}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    sidebarOpen: state.mainRouter
  };
};

export default connect(mapStateToProps, { openSidebar, closeSidebar })(Navbar);
