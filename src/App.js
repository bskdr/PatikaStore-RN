import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import products from './products.json';

const App = () => {
  const renderProducts = ({item}) => <ProductCard product={item} />;
  const productKey = item => item.id.toString();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <FlatList
        ListHeaderComponent={() => <SearchBar />}
        numColumns={2}
        data={products}
        keyExtractor={productKey}
        renderItem={renderProducts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  title: {
    color: '#800080',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default App;
