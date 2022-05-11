import React from 'react';
import StarRating from 'react-native-star-rating';

function RatingStars({starCount, peopleCount}) {
  return (
    <View style={styles.container}>
      <Text style={styles.peopleCount}>{peopleCount}</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={starCount}
        fullStarColor={'gold'}
      />
    </View>
  );
}

export default RatingStars;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    marginTop: 200,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  peopleCount: {
    color: 'gray',
    margin: 10,
  },
});
