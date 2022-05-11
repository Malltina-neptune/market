import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Title({title}) {
  return (
    <Text style={styles.titleText} numberOfLines={2}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: 'gray',
    textAlign: 'left',
    textTransform: 'capitalize',
    fontSize: 18,
    paddingEnd: 15,
    paddingTop: 8,
    paddingBottom: 10,
    overflow: 'hidden',
    maxHeight: '100%',
  },
});

export default Title;
