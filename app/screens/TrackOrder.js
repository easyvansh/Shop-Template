import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ActivityIndicator,
  } from 'react-native';
  import { useState } from 'react';
  import { useGetOrderQuery } from '../store/apiSlice';
import ProductDetails from './ProductDetails';
import ViewProduct from '../components/ViewProduct';
  
  const TrackOrder = () => {
    const [ref, setRef] = useState('');
  
    const { data, isLoading, error } = useGetOrderQuery(ref);
   
    return (
      <View style={styles.root}>
        <TextInput
          style={styles.input}
          value={ref}
          onChangeText={setRef}
          placeholder="Your order reference"
        />
        {isLoading && <ActivityIndicator />}
        {data?.status !== 'OK' && <Text>Order not found</Text>}
        {/* {data?.status === 'OK' && <Text>Order: {JSON.stringify(data.data)}</Text>} */}
        {data?.status === 'OK'  && <ViewProduct route = {data.data}/>
        }
      </View>
    );
    
  };
  
  const styles = StyleSheet.create({
    root: {
      padding: 10,
    },
    input: {
      borderColor: 'lightgrey',
      borderWidth: 1,
      padding: 15,
      borderRadius: 5,
    },
  });
  
  export default TrackOrder;