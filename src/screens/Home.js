import React, {useEffect, useState} from 'react';
import {ActivityIndicator, TextInput, FlatList, View} from 'react-native';
import Product from '../components/Product';
import Search from '../components/Search';

const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

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

  const handleSearch = () => {
    if (searchValue.trim().length === 0) {
      return;
    }
    navigation.navigate('result', {title: searchValue});
  };

  return (
    <View>
      <Search
        searchValue={searchValue}
        setSearchValue={value => setSearchValue(value)}
        onSubmit={handleSearch}
        onClear={() => setSearchValue('')}
      />

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          showsVerticalScrollIndicator={false}
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
