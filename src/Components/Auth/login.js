import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, emailChanged, passwordChanged, confirmPasswordChanged, resetAuth, showRegister } from '../../Actions';
// Router Actions
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';
import { View, Button, Spinner, TextInput, Text, Title, Subtitle, Caption } from '@shoutem/ui';
import { styles } from './authStyles';
import { Card, CardSection } from '../Common';
import AuthMenu from './authMenu';

class LoginForm extends Component {
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  render() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <View>
        <AuthMenu currentPage="signIn" />
        <View style={styles.mainContainer}>
          <CardSection>
            <TextInput
              placeholder={'Email'}
              onChangeText={ text => this.props.emailChanged(text) }
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <TextInput
              placeholder={'Password'}
              onChangeText={ text => this.props.passwordChanged(text) }
              value={this.props.password}
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <TouchableOpacity activeOpacity={0.7} style={styles.authButton} onPress={this.onButtonPress.bind(this)}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </CardSection>

          <Subtitle style={styles.errorText}>
            {this.props.error}
          </Subtitle>
          <TouchableOpacity>
            <Subtitle style={styles.problemsButton}>Having problems signing in?</Subtitle>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { email, password, error, loading } = state.auth;
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, resetAuth })(LoginForm);
