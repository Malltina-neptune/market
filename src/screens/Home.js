import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Product from '../components/Product';

const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(
        'https://api.malltina.net/search/v2?q=shoes',
      );
      const json = await response.json();
      setData(json.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          scrollEnabled={true}
          renderItem={({item}) => (
            <Product
              title={item.title}
              deal={item.price.deal}
              price={item.price.main}
              rating={4}
              image={item.image}
            />
          )}
        />
      )}
    </View>
  );
};

export default Home;
