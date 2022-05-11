import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ProductPrice = ({mainPrice, discount}) => {
  const calcDiscount = (mainPrice - discount).toFixed(2);
  const finalPrice = (mainPrice - calcDiscount).toFixed(2);

  return (
    <View>
      {discount && (
        <View style={styles.discount_wrapper}>
          <Text style={styles.discount}>${calcDiscount}</Text>
          <Text style={styles.discountText}>تخفیف</Text>
        </View>
      )}
      <Text style={styles.price}>
        ${discount !== null ? finalPrice : mainPrice}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  discount: {
    color: '#F00',
    fontSize: 16,
  },
  discountText: {
    color: '#808080',
    fontSize: 16,
    marginLeft: 6,
  },
  price: {
    fontSize: 25,
    color: '#000000',
  },
  discount_wrapper: {
    flexDirection: 'row',
  },
});

export default ProductPrice;
