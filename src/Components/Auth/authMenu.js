import React, { Component } from 'react'
import { connect } from 'react-redux';
import { TouchableOpacity, View } from 'react-native'
import { Heading, Divider } from '@shoutem/ui'
import { setAuthRoute, resetAuthError } from '../../Actions/authActions';

class AuthMenu extends Component {
  handleSignInButton() {
    this.props.setAuthRoute("signIn");
    this.props.resetAuthError();
  }
  handleSignUpButton() {
    this.props.setAuthRoute("signUp");
    this.props.resetAuthError();
  }
  render() {
    if (this.props.currentPage === "signIn") {
      return (
        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <TouchableOpacity style={{ flex: 1, marginRight: 0 }}>
            <Heading>Sign In</Heading>
            <View style={{ backgroundColor: "#20213c", height: 1.5, marginRight: 30, marginTop: 4 }}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleSignUpButton.bind(this)} style={{ flex: 1, marginRight: 55 }} >
            <Heading style={{ opacity: 0.5 }}>Sign Up</Heading>
            <View style={{ backgroundColor: "#20213c", opacity: 0.2, height: 1.5, marginRight: 20, marginTop: 4 }}></View>
          </TouchableOpacity>
        </View>
      );
    } else if (this.props.currentPage === "signUp") {
      return (
        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <TouchableOpacity onPress={this.handleSignInButton.bind(this)} style={{ flex: 1, marginRight: 0 }}>
            <Heading style={{ opacity: 0.5 }}>Sign In</Heading>
            <View style={{ backgroundColor: "#20213c", opacity: 0.2, height: 1.5, marginRight: 30, marginTop: 4 }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, marginRight: 55 }}>
            <Heading>Sign Up</Heading>
            <View style={{ backgroundColor: "#20213c", height: 1.5, marginRight: 20, marginTop: 4 }}></View>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return { currentPage } = state.auth;
};

export default connect(mapStateToProps, { setAuthRoute, resetAuthError })(AuthMenu);
