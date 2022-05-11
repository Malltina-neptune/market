import React from 'react';
import {View, TextInput} from 'react-native';

function Search(searchValue, setSearchValue, onSubmit) {
  return (
    <View style={styles.searchBox}>
      <Image
        style={styles.imgStyle}
        source={require('market/src/assets/search.png')}
      />
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: 'lightgray',
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 30,
    overflow: 'hidden',
  },
  imgStyle: {
    margin: 10,
    height: 20,
    width: 20,
  },
});
export default Search;
