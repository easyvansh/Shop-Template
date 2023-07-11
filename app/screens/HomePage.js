import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import products from "../data/products"
import { FlatList } from 'react-native';

export default function App() {
  return (
    <FlatList
  data={products}
  renderItem={({ item }) => (
    <View style={{ width: "50%", padding: 1 }}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={{alignSelf: "center",fontWeight: "bold"}}>{item.name}</Text>
    </View>
  )}
  numColumns={2}
/>
  );
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
});
