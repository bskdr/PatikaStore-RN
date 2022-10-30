/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = ({product}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." style={styles.input} />
    </View>
  );
};

export default SearchBar;
