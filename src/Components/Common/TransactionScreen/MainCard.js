import React from 'react';
import { View } from 'react-native';
import { ActionForm } from '../ActionForm';
import TagsForm from './TagsForm';
import CommentSection from './CommentSection';
import NewComment from './NewComment';

const styles = {
  mainCard: {
    backgroundColor: '#ebecee',
    zIndex: -1,
    bottom: 30
  },
};

const MainCard = () => {
  return (
    <View style={styles.mainCard}>
      <ActionForm label="Payment Method" value="Chase Checking" disabled hideArrow />
      <ActionForm label="Merchant" value="Antonio's Pizza LLC" formLabel="Rename Merchant" />
      <TagsForm label="TAGS" value="meh" />
      <CommentSection />
      <NewComment />
    </View>
  );
};

export default MainCard;
