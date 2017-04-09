import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Modal from 'react-native-simple-modal';

const styles = {
  modalStyle: {
    borderRadius: 2,
    backgroundColor: '#F5F5F5',
    height: 300,
    padding: 0
  }
};

class Dropdown extends Component {
  render() {
    const { open, onClose } = this.props;
    return (
      <Modal
        open={open}
        offset={0}
        overlayBackground={'rgba(0, 0, 0, 0.55)'}
        animationDuration={200}
        animationTension={40}
        modalDidOpen={() => undefined}
        modalDidClose={onClose}
        containerStyle={{ justifyContent: 'center' }}
        modalStyle={styles.modalStyle}
        closeOnTouchOutside
      >
        <ScrollView>
          {this.props.children}
        </ScrollView>
      </Modal>
    );
  }
}

export { Dropdown };
