import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../redux/actions';
import Product from '../components/Product';
import Search from '../components/Search';

const Home = ({navigation}) => {
  const {products} = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleSearch = () => {
    if (searchValue.trim().length === 0) {
      return;
    }
    navigation.navigate('result', {title: searchValue});
  };
  console.log(products);

  return (
    <View>
      <Search
        searchValue={searchValue}
        setSearchValue={value => setSearchValue(value)}
        onSubmit={handleSearch}
        onClear={() => setSearchValue('')}
      />

      {products.length < 1 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={products}
          keyExtractor={({id}) => id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Product
              title={item.title}
              deal={item.price.deal}
              peopleRate={item.review.people}
              price={item.price.main}
              rating={item.review.stars}
              image={item.image}
            />
          )}
        />
      )}
    </View>
  );
};

export default Home;
