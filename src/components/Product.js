import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import ProductPrice from './ProductPrice';
import Title from './Title';

function Product({title, price, deal, rating, image}) {
  return (
    <View style={styles.product}>
      <View style={styles.productDetail}>
        <Text>{rating}</Text>
        <Title title={title} />
        <ProductPrice mainPrice={price} discount={deal} />
      </View>
      <View>
        <Image style={styles.productImage} source={{uri: image}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 19,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 245,
    backgroundColor: 'white',
  },
  productDetail: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productImage: {
    width: '40%',
    minWidth: 145,
    height: '100%',
    minHeight: 145,
    resizeMode: 'contain',
  },
});

export default Product;
