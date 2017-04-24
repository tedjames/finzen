import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modalbox';

import { connect } from 'react-redux';
import {
  loginUser, registerUser,
  emailChanged, passwordChanged, confirmPasswordChanged,
  resetAuth,
  hideRegister, showRegister
} from '../../Actions';

import AuthHeader from './authHeader';
import LoginButton from './Buttons/LoginButton';
import RegisterButton from './Buttons/RegisterButton';
import Field from './Field';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const styles = {
  authBackground: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    zIndex: -1
  },
  registerBackground: {
    flex: 1,
    width: '100%',
    alignSelf: 'center'
  },
  divider: {
    height: 1,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#eee'
  },
  error: {
    color: 'red',
    fontFamily: 'Montserrat',
    fontSize: 11,
    letterSpacing: 1.1,
    fontWeight: '400',
    top: 12
  }
};

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = ({
      modalVisible: false,
    });
  }

  handleLogin() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderForm() {
    const { loading, email, password, error } = this.props;
    if (loading) {
      return (
        <Text>Loading...</Text>
      );
    } return (
      <LoginForm onSubmit={() => this.props.loginUser({ email, password })}>
        <Field
          label="Username"
          placeholder="your@email.com"
          value={email}
          onChangeText={text => this.props.emailChanged(text)}
        />
        <Field
          label="Password"
          placeholder="******"
          value={password}
          onChangeText={text => this.props.passwordChanged(text)}
          secureTextEntry
          disableDivider
        />
        { error ? <Text style={styles.error}>AUTHENTICATION FAILED</Text> : null }
      </LoginForm>
    );
  }

  render() {
    const { email, password, confirmPassword } = this.props;
    return (
      <KeyboardAwareScrollView
        scrollEnabled={false}
        extraScrollHeight={25}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{ flex: 1 }}
        style={{ backgroundColor: '#000' }}
      >
        <AuthHeader />

        <Image
          source={require('../../Images/authBackground.png')}
          style={styles.authBackground}
        >
          {this.renderForm()}

          <RegisterButton onPress={this.props.showRegister} />

        </Image>
        <Modal
          style={{ zIndex: 5 }}
          isOpen={this.props.showRegisterModal}
          onClosed={this.props.hideRegister}
        >
          <Image
            source={require('../../Images/registerBackground.png')}
            style={styles.registerBackground}
          >
            <RegisterForm
              onSubmit={() => this.props.registerUser(email, password, confirmPassword)}
            >
              <Field
                label="Email"
                placeholder="john@smith.com"
                value={email}
                onChangeText={text => this.props.emailChanged(text)}
              />
              <Field
                label="Password"
                placeholder="******"
                value={password}
                onChangeText={text => this.props.passwordChanged(text)}
                secureTextEntry
              />
              <Field
                label="Confirm Password"
                value={confirmPassword}
                placeholder="******"
                onChangeText={text => this.props.confirmPasswordChanged(text)}
                secureTextEntry
              />
            </RegisterForm>
          </Image>
        </Modal>

      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return { email, password, confirmPassword, error, loading, showRegisterModal, currentPage } = state.auth;
};

export default connect(mapStateToProps, {
  confirmPasswordChanged,
  emailChanged,
  passwordChanged,
  loginUser,
  registerUser,
  resetAuth,
  hideRegister,
  showRegister
})(Auth);
