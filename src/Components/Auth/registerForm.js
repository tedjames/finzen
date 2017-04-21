import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { loginUser, emailChanged, passwordChanged, confirmPasswordChanged, registerUser, resetAuth, passwordMismatch } from '../../Actions';
import { View, Card, Button, Spinner, TextInput, Text, Title, Subtitle, Caption } from '@shoutem/ui';
import { styles } from './authStyles';
import { CardSection } from '../Common'
import AuthMenu from './authMenu';

class RegisterForm extends Component {
  onButtonPress() {
    const { email, password, confirmPassword } = this.props;
    if (password === confirmPassword) {
      this.props.registerUser({ email, password });
    } else {
      this.props.passwordMismatch();
    }

  }
  render() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return(
      <View>
        <AuthMenu currentPage="signUp"/>
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
            <TextInput
              placeholder={'Confirm Password'}
              onChangeText={ text => this.props.confirmPasswordChanged(text) }
              value={this.props.confirmPassword}
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <TouchableOpacity activeOpacity={0.7} style={styles.authButton} onPress={this.onButtonPress.bind(this)}>
              <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
          </CardSection>
          <Subtitle style={styles.errorText}>
            {this.props.error}
          </Subtitle>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { email, password, error, loading, confirmPassword } = state.auth;
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, confirmPasswordChanged, registerUser, passwordMismatch })(RegisterForm);
