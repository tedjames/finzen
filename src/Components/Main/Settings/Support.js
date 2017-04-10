import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ActionForm, Form, FormField, BackButton, SaveButton, Dropdown, DropdownOption, GradientView } from '../../Common';
import Header from './Header';


export default class Support extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.dropdownHandler = this.dropdownHandler.bind(this);

    this.state = ({
      buttonText: 'SUBMIT',
      problemType: '',
      disableButtons: false,
      loading: false,
      success: false,
      fail: false,
      modalOpen: false
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

  dropdownHandler(problemType) {
    this.setState({ modalOpen: false, problemType });
  }

  render() {
    const { loading, disableButtons, buttonText, success, fail } = this.state;

    return (
      <GradientView colors={['#fff', '#f5f5f8']}>
        <ScrollView>
          <View>
            <BackButton loading={loading} />
            <Header text="SUPPORT" loading={loading} />
          </View>

          <Form height={450} loading={loading}>
            <ActionForm disabled={disableButtons} label="Problem Type" value={this.state.problemType} placeholder="Please choose one..." onPress={() => this.setState({ modalOpen: true })} dropdown />
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
        <Dropdown open={this.state.modalOpen} onClose={() => this.setState({ modalOpen: false })}>
          <DropdownOption label="Account Linking" onPress={label => this.dropdownHandler(label)} />
          <DropdownOption label="Security" onPress={label => this.dropdownHandler(label)} />
          <DropdownOption label="Security" onPress={label => this.dropdownHandler(label)} />
          <DropdownOption label="Security" onPress={label => this.dropdownHandler(label)} />
          <DropdownOption label="Bug Report" onPress={label => this.dropdownHandler(label)} />
          <DropdownOption label="Other" onPress={label => this.dropdownHandler(label)} disableDivider />
        </Dropdown>
      </GradientView>
    );
  }
}
