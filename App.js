import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import products from "./app/data/products"
import { FlatList } from 'react-native';
import AppNavigator from './Navigator';

export default function App() {
  return (
    <AppNavigator/>
  );
}

