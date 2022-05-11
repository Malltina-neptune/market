import {ActivityIndicator, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Product from '../components/Product';
import {useCallback} from 'react/cjs/react.production.min';

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
            stars: res.review.stars,
            peopleRate: res.review.people,
            price: res.price.main,
            discount: res.price.deal,
          })),
        ),
      )
      .catch(() => console.error('error on fetching search result'));
  }, [searchApi]);

  const renderItem = useCallback(
    ({item}) => (
      <Product
        image={item.image}
        title={item.title}
        rating={item.stars}
        peopleRate={item.peopleRate}
        price={item.price}
        deal={item.discount}
      />
    ),
    [],
  );

  const keyExtractor = useCallback(item => item.id, []);

  return (
    <View>
      {data.length < 1 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};

export default Result;
