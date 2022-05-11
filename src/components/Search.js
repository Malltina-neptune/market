import React from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Search({searchValue, setSearchValue, onSubmit, onClear}) {
  return (
    <View style={styles.mainView}>
      <Image style={styles.imgStyle} source={require('../assets/search.png')} />
      <TextInput
        style={styles.input}
        value={searchValue}
        onChangeText={setSearchValue}
        onSubmitEditing={onSubmit}
      />
      <TouchableOpacity onPress={onClear}>
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
    flex: 1,
  },
  imgStyle: {
    height: 20,
    width: 20,
    marginRight: 4,
  },
  mainView: {
    width: '100%',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
});
export default Search;
