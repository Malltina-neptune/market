import React from 'react';
import {Text, StyleSheet} from 'react-native';

function Title({title}) {
  return <Text style={styles.titleText}>{title}</Text>;
}

const styles = StyleSheet.create({
  titleText: {
    color: 'gray',
    textAlign: 'left',
    textTransform: 'capitalize',
    lineHeight: 1.2,
    fontSize: '18px',
    padding: '0 4px 5px 8px',
  },
});

export default Title;
