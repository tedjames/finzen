import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modalbox';

import { connect } from 'react-redux';
import { loginUser, emailChanged, passwordChanged, registerUser, resetAuth, hideRegister } from '../../Actions';

import AuthHeader from './authHeader';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import LoginForm from './LoginForm';

const styles = {
  authBackground: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    zIndex: -1
  },
  divider: {
    height: 1,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#eee'
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

  render() {
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
          <LoginForm>
            <EmailField
              value={this.props.email}
              onChangeText={text => this.props.emailChanged(text)}
            />
            <View style={styles.divider} />
            <PasswordField
              value={this.props.password}
              onChangeText={text => this.props.passwordChanged(text)}
            />
          </LoginForm>

          <LoginButton onPress={null} />
          <RegisterButton onPress={() => this.setState({ modalVisible: true })} />

        </Image>
        <Modal
          style={{ zIndex: 5 }}
          isOpen={this.state.modalVisible}
          onClosed={() => this.setState({ modalVisible: false })}
        >
          <Text>Meh</Text>
        </Modal>

      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return { email, password, error, loading, showRegisterModal, currentPage } = state.auth;
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  registerUser,
  resetAuth,
  hideRegister
})(Auth);
