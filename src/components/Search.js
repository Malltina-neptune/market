import React from 'react';
import {View, TextInput} from 'react-native';

function Search(searchValue, setSearchValue, onSubmit) {
  return (
    <View>
      <TextInput
        style={styles.searchBox}
        placeholder="Search products"
        value={searchValue}
        onChangeText={setSearchValue}
        onSubmitEditing={onSubmit}>
        <Image
          source={require('market/src/assets/search.png')}
        />
      </TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  searchBox: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Search;
