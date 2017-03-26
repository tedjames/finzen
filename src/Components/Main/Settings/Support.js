import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LinearGradient from 'react-native-linear-gradient';
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */
import Modal from 'react-native-simple-modal';
import { ActionForm, Form, FormField, BackButton, SaveButton } from '../../Common';
import Header from './Header';

const styles = {
  modalStyle: {
    borderRadius: 2,
    margin: 20,
    padding: 10,
    backgroundColor: '#F5F5F5',
    height: 300
  }
};


export default class Support extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);

    this.state = ({
      buttonText: 'SUBMIT',
      disableButtons: false,
      loading: false,
      success: false,
      fail: false
    });
  }

  handleSave() {
    // TODO: DISABLE THE MAIN SCROLLVIEW HERE
    this.setState({ buttonText: 'SUBMITTING', disableButtons: true, loading: true });
    // Insert API calls here
    setTimeout(() => {
      this.setState({ success: true });
    }, 3000);
  }

  render() {
    const { loading, disableButtons, buttonText, success, fail } = this.state;

    return (
      <LinearGradient colors={['#fff', '#f5f5f8']} style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <BackButton loading={loading} />
            <Header text="SUPPORT" loading={loading} />
          </View>

          <Form height={450} loading={loading}>
            <ActionForm disabled={disableButtons} label="Problem Type" value="" placeholder="Please choose one..." dropdown />
            <FormField disabled={disableButtons} label="Description" value="" placeholder="Doe" lines={5} multiline />
          </Form>

          <SaveButton
            width={250}
            text={buttonText}
            onPress={this.handleSave}
            loading={loading}
            disabled={disableButtons}
            success={success}
            fail={fail}
          />
        </ScrollView>
        <Modal
          open={this.props.modalOpen}
          offset={0}
          overlayBackground={'rgba(0, 0, 0, 0.75)'}
          animationDuration={200}
          animationTension={40}
          modalDidOpen={() => undefined}
          modalDidClose={() => this.setState({ modalOpen: false })}
          containerStyle={{ justifyContent: 'center' }}
          modalStyle={styles.modalStyle}
          closeOnTouchOutside
        />
      </LinearGradient>
    );
  }
}
