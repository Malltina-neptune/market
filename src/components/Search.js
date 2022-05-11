import React from 'react';
import {View, TextInput, Image, StyleSheet , TouchableOpacity} from 'react-native';

function Search({searchValue, setSearchValue, onSubmit, onClear}) {
  return (
    <View style={styles.searchBox}>
      <View style={styles.mainView}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/search.png')}
        />
        <TextInput
          value={searchValue}
          onChangeText={setSearchValue}
          onSubmitEditing={onSubmit}
        />
      </View>
      <TouchableOpacity style={styles.closeButtonParent} onPress={onClear}>
        <Image
          style={styles.closeButton}
          source={require('../assets/close.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgStyle: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
  mainView: {
    flexDirection: 'row',
    padding: 10,
  },
  closeButtonParent: {
    position: 'absolute',
    right: 20,
  },
});
export default Search;