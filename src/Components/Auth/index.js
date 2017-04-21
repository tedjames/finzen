import React, { Component } from 'react';
import { connect } from 'react-redux';
// Redux Actions
import { loginUser, emailChanged, passwordChanged, registerUser, resetAuth, hideRegister } from '../../Actions';
// Router Actions
import { Actions } from 'react-native-router-flux';
// UI Components
import { StatusBar } from 'react-native';
// import Modal from 'react-native-modalbox';
import { View, Card, Button, Spinner, TextInput, Text, Title, Subtitle, Caption } from '@shoutem/ui';
// Custom Components
import { CardSection } from '../Common';
import RegisterForm from './registerForm';
import LoginForm from './loginForm';
import AuthMenu from './authMenu';
// Custom Stylesheet
import { styles } from './authStyles';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      modalOpen: false,
      authPage: "signIn"
    });
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderButtons() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <View style={styles.buttonBar}>
        <View style={{ flex: 1, flexGrow: 1 }}>
          <Button styleName="dark" style={styles.loginButton} onPress={this.onButtonPress.bind(this)}>
            <Text>Sign in</Text>
          </Button>
          <Button styleName="clear" style={styles.registerButton} onPress={() => this.setState({ modalOpen: true })}>
            <Caption style={styles.registerText}>Dont have an account? Sign up</Caption>
          </Button>
        </View>
      </View>
    );
  }
  renderRouter() {
    if (this.props.currentPage === "signIn") {
      return(
        <LoginForm />
      );
    } else if (this.props.currentPage === "signUp") {
      return(
        <RegisterForm />
      );
    }
  }
  render() {
    return(
      <View style={styles.parentContainer}>
        <StatusBar
         hidden
       />
       {this.renderRouter()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { email, password, error, loading, showRegisterModal, currentPage } = state.auth;
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, registerUser, resetAuth, hideRegister })(Auth);
