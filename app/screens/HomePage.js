import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Pressable, Text, View ,Image} from 'react-native';
import products from "../data/products"
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  return (
    <FlatList
    data = {products}
    renderItem = {({item}) =>  (
      <Pressable onPress = {() =>{
        navigation.navigate('Product Details');
      }}
         style={styles.itemContainer}>
    <Image source={{ uri: item.image}} style={styles.image} /> 
    </Pressable>
    )}
    keyExtractor = {item => item.id}
    numColumns={2}
    />
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    aspectRatio: 1,
  },
  itemContainer:{ 
    width: "50%", 
    padding: 1 
  }
});
