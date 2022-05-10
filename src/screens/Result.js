import {SafeAreaView, ActivityIndicator, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

const Result = () => {
  const route = useRoute();
  const [data, setData] = useState('');
  const title = route.params.title.toLowerCase();

  const searchApi = `https://api.malltina.net/search/v2?q=${title}`;

  useEffect(() => {
    fetch(searchApi)
      .then(response => response.json())
      .then(json =>
        setData(
          json.products.map(res => ({
            id: res.id,
            title: res.title,
            image: res.image,
            starts: res.review.stars,
            people: res.review.people,
            price: res.price.main,
            discount: res.price.deal,
          })),
        ),
      )
      .catch(() => alert('no item found'));
  }, [searchApi]);

  return (
    <SafeAreaView>
      {data.length < 1 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default Result;
