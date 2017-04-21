import React, { Component } from 'react';
import { View, StatusBar, Text, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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

const { width } = Dimensions.get('window');

const styles = {
  fin: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 55,
    fontWeight: '600',
    letterSpacing: 17,
    position: 'absolute',
    top: 95,
    left: 30

  },
  zen: {
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 55,
    fontWeight: '600',
    letterSpacing: 17,
    zIndex: 10,
    position: 'absolute',
    top: 162,
    left: 75
  },
  authBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    alignSelf: 'center',
    marginTop: -220,
    zIndex: -1
  },
  loginContainer: {
    backgroundColor: 'white',
    height: 185,
    width: '80%',
    marginRight: 25,
    alignSelf: 'center',
    marginTop: 400,
    padding: 30,
    paddingBottom: 35,
    paddingTop: 35
  },
  label: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    letterSpacing: 1.4,
    color: '#879099',
    opacity: 0.85,
    marginBottom: 5,
    backgroundColor: 'transparent'
  },
  field: {
    height: 25,
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: '500'
  },
  loginButton: {
    height: 75,
    width: 75,
    alignSelf: 'flex-end',
    position: 'relative',
    right: 30,
    bottom: 55,
  },
  playIcon: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    color: 'white'
  },
  registerText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    letterSpacing: 3.4,
    opacity: 0.55,
    backgroundColor: 'transparent'
  },
  registerButton: {
    flex: 1,
    marginLeft: 25,
    width: 200,
    bottom: 25
  }
};

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

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <GradientView style={{ height: 200 }} colors={['#AC70FB', '#9197F8', '#77BDF5']} />
        <Text style={styles.fin}>FIN</Text>
        <Text style={styles.zen}>ZEN</Text>

        <Image
          source={require('../../Images/loginBackground.png')}
          style={styles.authBackground}
        >
          <View style={styles.loginContainer}>
            <View style={styles.emailField}>
              <Text style={styles.label}>USERNAME</Text>
              <TextInput
                style={styles.field}
                placeholder={'your@email.com'}
                onChangeText={text => this.props.emailChanged(text)}
                value={this.props.email}
                returnKeyType={'done'}
                autoCapitalize={'none'}
                autoCorrect={false}
              />
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={styles.label}>PASSWORD</Text>
              <TextInput
                style={styles.field}
                placeholder={'*******'}
                onChangeText={text => this.props.passwordChanged(text)}
                value={this.props.password}
                autoCorrect={false}
                returnKeyType={'done'}
                autoCapitalize={'none'}
                secureTextEntry
              />
            </View>
          </View>

          <TouchableOpacity style={styles.loginButton} activeOpacity={0.6}>
            <GradientView style={{ height: '100%', justifyContent: 'center' }} colors={['#AC70FB', '#9197F8', '#77BDF5']}>
              <Icon style={styles.playIcon} name="md-play" size={15} />
            </GradientView>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>NEW ACCOUNT</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { email, password, error, loading, showRegisterModal, currentPage } = state.auth;
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, registerUser, resetAuth, hideRegister })(Auth);
