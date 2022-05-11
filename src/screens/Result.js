import {ActivityIndicator, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Product from '../components/Product';

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

  return (
    <View>
      {data.length < 1 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Product
              image={item.image}
              title={item.title}
              rating={item.stars}
              peopleRate={item.peopleRate}
              price={item.price}
              deal={item.discount}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Result;
