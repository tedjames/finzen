import React from 'react';
import { View } from 'react-native';
import { ActionForm } from '../ActionForm';
import TagsForm from './TagsForm';
import CommentSection from './CommentSection';

const styles = {
  mainCard: {
    backgroundColor: '#ecedf0',
    paddingTop: 125,
    paddingBottom: 350,
    position: 'relative',
    bottom: 162,
    marginBottom: -500,
    zIndex: -1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1.275,
    shadowRadius: 15,
    elevation: 1,
  },
};

const MainCard = () => {
  return (
    <View style={styles.mainCard}>
      <ActionForm label="Payment Method" value="Chase Checking" disabled hideArrow />
      <ActionForm label="Merchant" value="Antonio's Pizza LLC" formLabel="Rename Merchant" />
      <TagsForm label="TAGS" value="meh" />
      <CommentSection />
    </View>
  );
};

export default MainCard;
