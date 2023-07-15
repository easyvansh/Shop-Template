import { StyleSheet, Pressable, Text, View, Image } from "react-native";
// import products from "../data/products";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productsSlice";
import { useGetProductsQuery } from "../store/apiSlice";
import { ActivityIndicator } from "react-native";

export default function App() {
  // const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error.error}</Text>;
  }

  const products = data.data;
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details",{id:item.id});
          }}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
