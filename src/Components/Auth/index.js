import React, { Component } from 'react';
import { View, StatusBar, Text, TextInput, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
    top: 105,
    left: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 4, height: 5 },
    textShadowRadius: 12
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
    top: 165,
    left: 75,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 4, height: 5 },
    textShadowRadius: 12
  },
  authBackground: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  loginContainer: {
    backgroundColor: 'white',
    height: 195,
    width: 300,
    marginRight: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 175,
    padding: 30,
    paddingBottom: 35,
    paddingTop: 35
  },
  label: {
    fontFamily: 'Montserrat',
    fontSize: 11,
    letterSpacing: 1.4,
    color: '#879099',
    opacity: 0.85,
    marginBottom: 5,
    backgroundColor: 'transparent'
  },
  field: {
    height: 25,
    fontFamily: 'Open Sans',
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: '400'
  },
  divider: {
    height: 1,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#eee'
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
    flex: 1,
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 12,
    letterSpacing: 3.4,
    opacity: 0.55,
    backgroundColor: 'transparent',
    alignSelf: 'center'
  },
  registerButton: {
    flex: 1,
    width: 175,
    flexDirection: 'row',
    position: 'relative',
    bottom: width / 8.5,
    left: width / 8
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
        <StatusBar hidden />
        <GradientView start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} style={{ height: 200 }} colors={['#AC70FB', '#9197F8', '#77BDF5']} />
        <Text style={styles.fin}>FIN</Text>
        <Text style={styles.zen}>ZEN</Text>

        <Image
          source={require('../../Images/authBackground.png')}
          style={styles.authBackground}
        >
          <View>
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
              <View style={styles.divider} />
              <View>
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
          </View>


          <TouchableOpacity style={styles.loginButton} activeOpacity={0.6}>
            <GradientView style={{ height: '100%', justifyContent: 'center' }} colors={['#AC70FB', '#9197F8', '#77BDF5']}>
              <Icon style={styles.playIcon} name="md-play" size={15} />
            </GradientView>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => this.setState({ modalVisible: true })}
          >
            <Text style={styles.registerText}>NEW ACCOUNT</Text>
          </TouchableOpacity>

        </Image>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({ modalVisible: false })}
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
