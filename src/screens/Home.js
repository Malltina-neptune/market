import {View, Text} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('result');
        }}>
        Home
      </Text>
    </View>
  );
};

export default Home;
