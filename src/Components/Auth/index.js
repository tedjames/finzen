import React, { Component } from 'react';
import { View, StatusBar, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, emailChanged, passwordChanged, registerUser, resetAuth, hideRegister } from '../../Actions';
import { GradientView } from '../Common';

/*
1. New Account Button
2. Login Button

Components:
1. Auth
- Renders either <Register />

*/

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = ({
      modalOpen: false,
      authPage: 'signIn'
    });
  }

  handleLogin() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  /*
  renderButtons() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  }
  */

  /*
  renderRouter() {
    if (this.props.currentPage === 'signIn') {
      return (
        <LoginForm />
      );
    } else if (this.props.currentPage === 'signUp') {
      return (
        <RegisterForm />
      );
    }
  }
  */

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GradientView style={{ height: 200 }} colors={['#AC70FB', '#9197F8', '#77BDF5']}>
          <StatusBar hidden />
          <ScrollView>
            <Text style={{ backgroundColor: 'transparent' }}>Test</Text>
          </ScrollView>
        </GradientView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { email, password, error, loading, showRegisterModal, currentPage } = state.auth;
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, registerUser, resetAuth, hideRegister })(Auth);
