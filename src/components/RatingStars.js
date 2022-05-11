import React from 'react';
import StarRating from 'react-native-star-rating';
import {View, Text, StyleSheet} from 'react-native';

function RatingStars({starCount, peopleCount}) {
  return (
    <View style={styles.container}>
      <StarRating
        disabled={false}
        maxStars={5}
        starSize={25}
        rating={starCount}
        fullStarColor={'gold'}
      />
      <Text style={styles.peopleCount}>{peopleCount}</Text>
    </View>
  );
}

export default RatingStars;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  peopleCount: {
    color: 'gray',
    marginHorizontal: 8,
    marginVertical: 4,
  },
});
