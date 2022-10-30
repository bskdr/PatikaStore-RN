/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#808080',
    fontWeight: 'bold',
  },
  inStock: {
    color: '#ff0000',
    fontSize: 16,
    fontWeight: '600',
  },
});
