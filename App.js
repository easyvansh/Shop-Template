import { store } from "./app/store";
import AppNavigator from "./Navigator";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
